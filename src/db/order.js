const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({






});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;