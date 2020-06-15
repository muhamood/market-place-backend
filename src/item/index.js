const express = require('express');

 
const itemRouter= express.Router()

const { getItems, createItems, updateItem, deleteItem } = require("./item-controller");

itemRouter.get('/items', getItems);
itemRouter.post('/items', createItems);
itemRouter.put('/items', updateItem);
itemRouter.delete('/items', deleteItem);


module.exports = itemRouter;