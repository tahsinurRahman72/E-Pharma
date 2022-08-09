const express = require('express')
const route = express.Router()
const logUser = require('../../models/loginUserModel')
const userData = require('../../models/registerUserModel')

route.post('/login_user', async(req,res) =>{
    
    try{
        const loginData = logUser(req.body)
        async function accessUserDatabase(){
            const userDatabase = await userData.find({})

            return userDatabase
        }
        accessUserDatabase().then((data)=>{
            let flag = false
            for(var i in data){
                userEmail= data[i].Email
                userPassword= data[i].Password                
                if(loginData.Email == userEmail && loginData.Password == userPassword){
                    res.send({
                        msg: 'User exists'
                    })
                    flag = true
                }
            }
            if(flag == false){
                res.send({
                    msg: 'User does not exist'
                })
            }        
        })


        }
    catch(err){
        res.send({msg: err})
    }
})

module.exports = route
