require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/medicine', require('./routes/api/insertMedicine'))
app.use('/medicine', require('./routes/api/showMedicineList'))
app.use('/register', require('./routes/api/registerUser'))
mongoose.connect(
    process.env.DB_CONNECT_STRING, 
    { useNewUrlParser: true, useUnifiedTopology: true},
    (req,res) =>{
        console.log('Connected to database')
    })
    var db = mongoose.connection;
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on ${process.env.PORT}`)
})
