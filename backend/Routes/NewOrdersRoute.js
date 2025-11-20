const express = require("express");
const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const verifyToken = require("../Middleware/AuthMiddleware");
const router = express.Router();

router.post("/newOrders", verifyToken, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body; //Extract body data
    const userId = req.user._id;

    // Create and save new order
    const newOrders = new OrdersModel({
      userId,
      name,
      qty,
      price,
      mode,
    });
    await newOrders.save();

    // BUY logic
    if (mode === "BUY") {
      const orderExists = await HoldingsModel.findOne({ name, userId });
      const positionExists = await PositionsModel.findOne({ name, userId });

      if (orderExists && positionExists) {
        const totalQty = orderExists.qty + qty;
        const totalInvest = orderExists.avg * orderExists.qty + price * qty;
        const newAvg = totalInvest / totalQty;

        orderExists.qty = totalQty;
        orderExists.price = totalInvest;
        orderExists.avg = newAvg;

        positionExists.price = totalInvest;
        positionExists.avg = newAvg;
        positionExists.qty = totalQty;
        positionExists.isLoss = true;

        await orderExists.save();
        await positionExists.save();
      } else {
        const newHolding = new HoldingsModel({
          userId,
          name,
          qty,
          avg: price,
          price,
          net: "+0.00%",
          day: "+0.00%",
        });
        await newHolding.save();

        const nPosition = new PositionsModel({
          userId,
          name,
          qty,
          avg: price,
          price,
          net: "+0.00%",
          day: "+0.00%",
          isLoss: true,
        });
        await nPosition.save();
      }
    }

    // SELL logic
    if (mode === "SELL") {
      const holdingExist = await HoldingsModel.findOne({ name, userId });
      const positionExist = await PositionsModel.findOne({ name, userId });

      if (holdingExist && holdingExist.qty >= qty) {
        const remainingQty = holdingExist.qty - qty;
        const remainingInvest = holdingExist.avg * remainingQty;

        if (remainingQty > 0) {
          holdingExist.qty = remainingQty;
          holdingExist.price = remainingInvest;
          holdingExist.avg =
            remainingQty > 0 ? remainingInvest / remainingQty : 0;
          await holdingExist.save();

          if (positionExist) {
            positionExist.qty = remainingQty;
            positionExist.price = remainingInvest;
            positionExist.avg =
              remainingQty > 0 ? remainingInvest / remainingQty : 0;
            await positionExist.save();
          }
        } else {
          // Remove holding and position if all stocks sold
          await HoldingsModel.deleteOne({ _id: holdingExist._id });
          if (positionExist) {
            await PositionsModel.deleteOne({ _id: positionExist._id });
          }
        }
      }
    }

    // Only one response
    res.json({ message: "Order processed successfully" });
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
