require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const HoldingsRoute = require("./Routes/HoldingsRoute");
const PositionRoute = require("./Routes/PositionsRoute");
const OrdersRoute = require("./Routes/OrdersRoute");
const NewOrdersRoute = require("./Routes/NewOrdersRoute");

// const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

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

// app.post("/newaddPositions", async (req, res) => {
//   let newtempPositions = [
//     {
//       userId: new mongoose.Types.ObjectId(),
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       userId: new mongoose.Types.ObjectId(),
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   newtempPositions.forEach((item) => {
//     let newPositions = new PositionsModel({
//       userId: item.userId,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPositions.save();
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
