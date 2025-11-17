const { model } = require("mongoose");
const { ListsSchema } = require("../schemas/ListsSchema");

const ListsModel = new model("Lists", ListsSchema);

module.exports = ListsModel;
