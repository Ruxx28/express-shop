const mongoose = require('mongoose')
const Admin = require('./admin')

const setting = new mongoose.Schema({
    name: {type: String, default: ''},
    address: [{
        road: String,
        district: String,
        city: String
    }],
    phone: [String],
    host: {type: String, default: ''},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin}
}, { timestamps: true })

module.exports = mongoose.model('setting', setting)