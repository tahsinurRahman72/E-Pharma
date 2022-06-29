const express = require('express')
const route = express.Router()
const meds = require('../../models/medicine')

route.post('/insert_medicine', async(req,res) =>{
    try{
        const newMed = new meds(req.body)
        await newMed.save()
        res.send(newMed)
    }catch(err){
        res.send({msg: err})
    }
})

module.exports = route
