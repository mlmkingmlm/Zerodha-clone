const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String,
    user_id:String
});

module.exports = {OrdersSchema};