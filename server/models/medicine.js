const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const medicineInformation = new Schema({
    uuid: Number,
    medicineNameByBrand: String,
    medicineGroupName: String,
    medicineStrength: String,
    medicineManufacturer: String,
    medicineInfo: String,
    medicinePrice: Number,
    medicineDeliveryStatus: String
}, {collection: 'medicineinformations'});

module.exports = mongoose.model('medicineinformation', medicineInformation)