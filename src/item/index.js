const express = require('express');

const {getItems,getItem, createItem, updateItem, deleteItem} = require('./item-controller');

const itemRouter = express.Router();

itemRouter.get('/', getItems);
itemRouter.get('/:id', getItem);
itemRouter.post('/', createItem);
itemRouter.put('/:id', updateItem);
itemRouter.delete('/:id', deleteItem)

module.exports = itemRouter;
