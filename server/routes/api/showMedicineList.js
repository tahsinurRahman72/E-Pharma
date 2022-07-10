const express = require('express')
const route = express.Router()
const showMeds = require('../../models/medicine')

route.get('/show_medicine', async(req,res) =>{
    try{
        async function showMedicine(){
            const medicinesList = await showMeds.find({})

            return medicinesList
        }

        showMedicine().then((data)=>{
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