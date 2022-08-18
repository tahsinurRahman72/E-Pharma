const express = require('express')
const route = express.Router()
const cartItems = require('../../models/cartModel')

route.post('/cart_items', async(req,res) =>{
    
    try{
        const cartItem = new cartItems(req.body)
        await cartItem.save()
        res.send({
            message: 'Added to Cart!',
            cartItem
        })
        } 
    catch(err){
        res.send({msg: err})
    }
})

module.exports = route
