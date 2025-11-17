require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const HoldingsRoute = require("./Routes/HoldingsRoute");
const PositionRoute = require("./Routes/PositionsRoute");
const OrdersRoute = require("./Routes/OrdersRoute");
const NewOrdersRoute = require("./Routes/NewOrdersRoute");
const ListsRoute = require("./Routes/ListsRoute");

// const HoldingsModel = require("./model/HoldingsModel");
// const PositionsModel = require("./model/PositionsModel");
// const OrdersModel = require("./model/OrdersModel");
// const ListsModel = require("./model/ListsModel");

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// ------------------ MIDDLEWARE -------------------
app.use(cors());
app.use(bodyParser.json());

// ------------------ ROUTES -----------------------

// GET Holdings
app.use("/", HoldingsRoute);

// GET Positions
app.use("/", PositionRoute);

//GET Order
app.use("/", OrdersRoute);

// POST Order
app.use("/", NewOrdersRoute);

//get List
app.use("/", ListsRoute);

// app.post("/addLists", async (req, res) => {
//   let newLists = [
//     { name: "TITAN", price: 3725.5, percent: "0.82%", isDown: false },
//     { name: "TECHM", price: 1344.25, percent: "-0.34%", isDown: true },
//     { name: "POWERGRID", price: 293.15, percent: "0.46%", isDown: false },
//     { name: "NTPC", price: 319.8, percent: "0.38%", isDown: false },
//     { name: "BPCL", price: 483.4, percent: "-0.22%", isDown: true },
//     { name: "INDUSINDBK", price: 1420.6, percent: "0.63%", isDown: false },
//     { name: "VEDL", price: 274.25, percent: "-0.41%", isDown: true },
//     { name: "IRCTC", price: 882.1, percent: "1.10%", isDown: false },
//     { name: "ZOMATO", price: 136.9, percent: "2.24%", isDown: false },
//     { name: "PAYTM", price: 423.5, percent: "-3.56%", isDown: true },
//     { name: "POLYCAB", price: 5350.75, percent: "0.72%", isDown: false },
//     { name: "DELHIVERY", price: 368.95, percent: "-0.18%", isDown: true },
//     { name: "INDIGO", price: 2950.8, percent: "1.25%", isDown: false },
//     { name: "NYKAA", price: 152.3, percent: "-0.44%", isDown: true },
//     { name: "NAUKRI", price: 5460.4, percent: "0.37%", isDown: false },
//     { name: "IDFCFIRSTB", price: 85.2, percent: "0.95%", isDown: false },
//     { name: "PNB", price: 91.45, percent: "-0.61%", isDown: true },
//     { name: "CANBK", price: 498.6, percent: "1.12%", isDown: false },
//     { name: "FEDERALBNK", price: 152.25, percent: "-0.23%", isDown: true },
//     { name: "TVSMOTOR", price: 2045.6, percent: "1.66%", isDown: false },
//     { name: "ASHOKLEY", price: 187.3, percent: "0.41%", isDown: false },
//     { name: "EICHERMOT", price: 3935.2, percent: "-0.19%", isDown: true },
//     { name: "BAJAJ-AUTO", price: 8535.1, percent: "1.07%", isDown: false },
//     { name: "BEL", price: 247.95, percent: "0.60%", isDown: false },
//     { name: "BHEL", price: 267.8, percent: "-0.76%", isDown: true },
//     { name: "HAL", price: 4140.2, percent: "1.95%", isDown: false },
//     { name: "RVNL", price: 334.45, percent: "-0.15%", isDown: true },
//     { name: "IRFC", price: 152.2, percent: "0.72%", isDown: false },
//     { name: "HINDCOPPER", price: 285.6, percent: "2.48%", isDown: false },
//     { name: "IOC", price: 161.3, percent: "-0.29%", isDown: true },
//   ];
//   newLists.forEach((item) => {
//     let newLists = new ListsModel({
//       name: item.name,
//       price: item.price,
//       percent: item.percent,
//       isDown: item.isDown,
//     });
//     newLists.save();
//   });
//   res.send("done");
// });

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
