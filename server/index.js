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
app.use('/login', require('./routes/api/loginUser'))
app.use('/dashboard', require('./routes/api/dashboard'))
app.use('/cartItems', require('./routes/api/cartItems'))
app.use('/cartItems', require('./routes/api/showCartItems'))
app.use('/checkout', require('./routes/api/calculatePrice'))

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
