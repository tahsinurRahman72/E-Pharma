const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartItem = new Schema({
    name: String,
    quantity: Number
}, {collection: 'cartItems'});

module.exports = mongoose.model('cartItem', cartItem)