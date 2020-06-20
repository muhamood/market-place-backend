const express = require('express');

const {createOrder, getOrders, getOrder, updateOrder,deleteOrder} = require('./order-controller');

const orderRouter = express.Router();

orderRouter.get('/', getOrders);
orderRouter.get('/:id', getOrder);
orderRouter.post('/', createOrder);
orderRouter.put('/:id', updateOrder);
orderRouter.delete('/:id', deleteOrder)

module.exports = orderRouter;