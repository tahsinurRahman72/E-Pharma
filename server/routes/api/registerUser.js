const express = require('express')
const route = express.Router()
const registerUser = require('../../models/registerUserModel')

route.post('/register_user', async(req,res) =>{
    
    try{
        const newUser = new registerUser(req.body)
        await newUser.save()
        res.send(newUser)
        }
    catch(err){
        res.send({msg: err})
    }
})

module.exports = route
