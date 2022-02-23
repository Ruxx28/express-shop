const mongoose = require('mongoose')
const Admin = require('./admin')

const promoCode = new mongoose.Schema({
    status: {type: Boolean, default: true},
    end: {type: Date, require: true},
    name: {type: String, require: true},
    condition: {type: String, require: false},
    type: {type: String, require: true},
    value: {type: Number, require: true},
    des: {type: String, require: false},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin}
}, { timestamps: true })

module.exports = mongoose.model('promo_code', promoCode)