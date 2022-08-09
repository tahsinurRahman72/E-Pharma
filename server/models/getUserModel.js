const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dashboardUser = new Schema({
    FirstName: String,
    LastName: String,
    Email: String,
}, {collection: 'users'});

module.exports = mongoose.model('dashboardUser', dashboardUser)