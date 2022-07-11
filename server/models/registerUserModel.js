const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const regUser = new Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Password: String,
}, {collection: 'users'});

module.exports = mongoose.model('regUser', regUser)