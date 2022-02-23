const mongoose = require('mongoose')
const promoCode = require('./promoCode')
const User = require('./user')
const Product = require('./product')
const Shipping = require('./shipping')
const Admin = require('./admin')

const order = new mongoose.Schema({
    type: {type: String, required: true},
    promoCode: {type:mongoose.Schema.Types.ObjectId, ref: promoCode, default: ''},
    state: {type: String, default: 'new'},
    total: {type: Number, require: true},
    shipping: {
        _id: {type:mongoose.Schema.Types.ObjectId, ref: Shipping, require: true},
        state: {type: String, require: true},
        start: {type: Date},
        end: {type: Date}
    },
    payment: {type: String, require: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: User, require: true},
    products: {type: [mongoose.Schema.Types.ObjectId], ref: Product, require: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin}
}, { timestamps: true })

module.exports = mongoose.model('order', order)