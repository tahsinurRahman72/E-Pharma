const express = require('express')
const route = express.Router()
const showCart = require('../../models/cartModel')
const medicineList = require('../../models/medicine')

route.get('/show_cart_items', async(req,res) =>{
    try{
        async function showCartItems(){
            const cartItemUuid = await showCart.distinct('uuid')    //gives a list of uuid of selected items
            const cartItemQuantity = await showCart.distinct('quantity') //gives a list of quantity of selected items

            const medicinesListUuid = await medicineList.distinct('uuid')   //gives a list of uuid of medicine items
            const medicinesListPrice = await medicineList.distinct('medicinePrice')

            let zippedList = medicinesListUuid.map((x, i) => [x, medicinesListPrice[i]]);
            // console.log(zippedList[0][1])
            



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