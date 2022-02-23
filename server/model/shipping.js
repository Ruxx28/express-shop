const mongoose = require('mongoose')
const Admin = require('./admin')

const shipping = new mongoose.Schema({
    name: {type: String, require: true},
    des: {type: String, require: false},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin}
}, { timestamps: true })

module.exports = mongoose.model('shipping', shipping)