const express = require("express");
const { OrdersModel } = require("../model/OrdersModel");
const verifyToken = require("../Middleware/AuthMiddleware");
const router = express.Router();

router.get("/addOrders", verifyToken, async (req, res) => {
  try {
    const userId = req.user._id;
    const allOrders = await OrdersModel.find({ userId });
    if (!allOrders) {
      return res
        .status(401)
        .json({ message: "orders not found", success: false });
    }
    res.json(allOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
