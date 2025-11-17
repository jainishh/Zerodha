const mongoose = require("mongoose");
const { Schema } = mongoose;

const ListsSchema = new Schema({
  name: String,
  price: Number,
  percent: String,
  isDown: Boolean,
});

module.exports = { ListsSchema };
