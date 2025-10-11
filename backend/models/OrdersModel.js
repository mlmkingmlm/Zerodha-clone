const {model} = require("mongoose");

const {OrdersSchema} = require("../schema/OredersSchema")

const OrderModel = new model("order", OrdersSchema);

module.exports = {OrderModel}