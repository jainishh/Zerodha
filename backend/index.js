require("dotenv").config();
const express = require("express");

const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

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
