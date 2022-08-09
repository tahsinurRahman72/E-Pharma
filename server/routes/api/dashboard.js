const express = require('express')
const route = express.Router()
const dashboardMeds = require('../../models/medicine')
const userModel = require('../../models/getUserModel')

route.get('/show_dashboard', async(req,res) =>{
    try{
        async function showDashboard(){
            const medicinesDashboardList = await dashboardMeds.find({})
            const userDashboardList = await userModel.find({})
            return {
                'medicines': medicinesDashboardList,
                'users': userDashboardList
            }
        }

        showDashboard().then((data)=>{
            res.json(data)
        })
        .catch((error)=>{
            res.json(error)
        })

    }catch(err){
        res.json({
            msg: 'Error: ', err
        })
    }
})

module.exports = route