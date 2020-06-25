const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    created_by:{
        type: String,
        required:true
    }

})

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;