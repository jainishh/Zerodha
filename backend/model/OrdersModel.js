const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = new model("OrdersModel", OrdersSchema);

module.exports = { OrdersModel };
