const express = require("express");
const { HoldingsModel } = require("../model/HoldingsModel");
const verifyToken = require("../Middleware/AuthMiddleware");
const router = express.Router();

router.get("/addHoldings", verifyToken, async (req, res) => {
  try {
    const userId = req.user._id;
    const allHoldings = await HoldingsModel.find({ userId });
    res.json(allHoldings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
