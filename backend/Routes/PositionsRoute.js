const express = require("express");
const { PositionsModel } = require("../model/PositionsModel");
const router = express.Router();

router.get("/addPositions", async (req, res) => {
  try {
    // const userId = req.user._id;
    const allPositions = await PositionsModel.find({});
    if (!allPositions) {
      return res
        .status(401)
        .json({ message: "orders not found", success: false });
    }
    res.json(allPositions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
