const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartItem = new Schema({
    uuid: String,
    quantity: Number
}, {collection: 'cartItems'});

module.exports = mongoose.model('cartItem', cartItem)