require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// ------------------ MIDDLEWARE -------------------
app.use(cors());
app.use(bodyParser.json());

app.get("/addHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/addPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ------------------ SERVER START ---------------------
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB is connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });
