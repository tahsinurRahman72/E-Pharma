const express = require('express')
const route = express.Router()
const showCart = require('../../models/cartModel')
const medicineList = require('../../models/medicine')

route.get('/show_cart_items', async(req,res) =>{
    try{
        const cartItemUuid = await showCart.distinct('uuid')    //gives a list of uuid of selected items
        const cartItemQuantity = await showCart.distinct('quantity') //gives a list of quantity of selected items

        const medicinesListUuid = await medicineList.distinct('uuid')   //gives a list of uuid of medicine items
        const medicinesListPrice = await medicineList.distinct('medicinePrice')

        async function calculatePrice(){
            let zippedList = medicinesListUuid.map((x, i) => [x, medicinesListPrice[i]]);
            // console.log(cartItemQuantity)
            let Finalprice = 0
            for (let [uuid, price] of zippedList){
                for(let cUuid in cartItemUuid){
                    // console.log(`${price}`)
                    if(cartItemUuid[cUuid] == `${uuid}`){
                        // console.log(cartItemQuantity[cUuid])
                        // console.log(`${price}`)
                        Finalprice += cartItemQuantity[cUuid] * `${price}`
                        
                    }
                }
            }
            return Finalprice
        }

        calculatePrice().then((data)=>{
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