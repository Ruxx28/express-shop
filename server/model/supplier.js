const mongoose = require('mongoose');
const Admin = require('./admin')
const Product = require('./product')

const supplier = new mongoose.Schema({
    name: {type: String, require: true},
    url: {type: String, required: false},
    address: [{
        road: String,
        district: String,
        city: String
    }],
    des: {type: String, required: false},
    products: {type: [mongoose.Schema.Types.ObjectId], ref: Product},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin}
}, { timestamps: true })

module.exports = mongoose.model('supplier', supplier)