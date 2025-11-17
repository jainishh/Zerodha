const express = require("express");
const ListModel = require("../model/ListsModel");
// const verifyToken = require("../Middleware/authMiddleware");
const router = express.Router();

router.get("/allLists", async (req, res) => {
  try {
    const allList = await ListModel.find({});
    res.json(allList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
