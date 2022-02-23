const mongoose = require('mongoose')
const User = require('./user')
const PromoCode = require('./promoCode')
const Shipping = require('./shipping')
const Product = require('./product')

const cart = new mongoose.Schema({
    state: {type: String, require: true, default: 'new'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: User},
    promoCode: {type:mongoose.Schema.Types.ObjectId, ref: PromoCode, default: ''},
    shipping: {type:mongoose.Schema.Types.ObjectId, ref: Shipping},
    products: [{
        _id: {type: mongoose.Schema.Types.ObjectId, ref: Product, require: true},
        quantity: {type: Number, require: true},
        price: {type: Number, require: true}
    }]
}, { timestamps: true })

module.exports = mongoose.model('cart', cart)