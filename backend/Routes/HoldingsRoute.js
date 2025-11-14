const express = require("express");
const { HoldingsModel } = require("../model/HoldingsModel");
const router = express.Router();

router.get("/addHoldings", async (req, res) => {
  try {
    // const userId = req.user._id;
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
