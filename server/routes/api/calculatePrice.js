const express = require('express')
const route = express.Router()
const showCart = require('../../models/cartModel')
const medicineList = require('../../models/medicine')

route.get('/checkout_items', async(req,res) =>{
    try{
        const cartItemName = await showCart.distinct('name')    //gives a list of uuid of selected items
        // console.log(cartItemName)
        const cartItemQuantity = await showCart.distinct('quantity') //gives a list of quantity of selected items
        // console.log(cartItemQuantity)
        const medicinesListName = await medicineList.distinct('medicineNameByBrand')   //gives a list of uuid of medicine items
        // console.log(medicinesListName)
        const medicinesListPrice = await medicineList.distinct('medicinePrice')
        // console.log(medicinesListPrice)

        let Finalprice = 0
        var selectedItems = []
        var quantity = cartItemQuantity

        async function calculatePrice(){
            let zippedList = medicinesListName.map((x, i) => [x, medicinesListPrice[i]]);
            // console.log(zippedList)
            selectedItems = zippedList
            // console.log(selectedItems[0])
            for (let [uuid, price] of zippedList){
                for(let cUuid in cartItemName){
                    // console.log(`${price}`)
                    if(cartItemName[cUuid] == `${uuid}`){
                        // console.log(cartItemQuantity[cUuid])
                        // console.log(`${price}`)
                        Finalprice += cartItemQuantity[cUuid] * `${price}`
                        
                    }
                }
            }
            return {
                finalPrice: Finalprice, 
                itemSelected: selectedItems, 
                quantityOfItems: quantity
            }
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