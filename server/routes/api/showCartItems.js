const express = require('express')
const route = express.Router()
const showCart = require('../../models/cartModel')
const medicineList = require('../../models/medicine')

route.get('/show_cart_items', async(req,res) =>{
    try{
        const cartItemUuid = await showCart.distinct('uuid')    //gives a list of uuid of selected items
        const medicinesListUuid = await medicineList.distinct('uuid')   //gives a list of uuid of medicine items

        async function showCartItems(){
            let difference = medicinesListUuid
                            .filter(x => cartItemUuid.includes(x))
            const cartItems = await medicineList.find({uuid: difference})        //gives the full list of selected items    

            return cartItems
        }

        showCartItems().then((data)=>{
            res.json(data)
        }).catch((error)=>{
            res.json(error)
        })
        
    }catch(err){
        res.json({
            msg: 'Error: ', err
        })
    }
})

module.exports = route