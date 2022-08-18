const express = require('express')
const route = express.Router()
const showCart = require('../../models/cartModel')
const medicineList = require('../../models/medicine')

route.get('/show_cart_items', async(req,res) =>{
    try{
        const cartItemName = await showCart.distinct('name')    //gives a list of uuid of selected items
        const medicinesListName = await medicineList.distinct('medicineNameByBrand')   //gives a list of uuid of medicine items
        // console.log(cartItemName)
        // console.log(medicinesListName)
        async function showCartItems(){
            let difference = medicinesListName
                            .filter(x => cartItemName.includes(x))
            // console.log(difference)
            const cartItems = await medicineList.find({medicineNameByBrand: difference})        //gives the full list of selected items    

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