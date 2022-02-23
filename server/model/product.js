const mongoose = require('mongoose')
const Image = require('./upload')
const Admin = require('./admin')
const {removeAccents, getSlug} = require('../utils/formatValue')

const product = new mongoose.Schema({
    sku: { type: String, default: ''},
    status: { type: String, default: 'published'},
    slug: { type: String},
    name: { type: String, require: true},
    quantity: { type: Number, require: true},
    des: { type: String },
    price: { type: Number, require: true},
    likeCounts: { type: Number, default: 0},
    buyCounts:  { type: Number, default: 0},
    viewCounts: { type: Number, default: 0},
    isSale: {
        status: {type: Boolean, default: false},
        percent: {type: Number, default: 0},
        end: {type: Date, default: new Date}
    },
    size: {type: Number, default: 0},
    weight: {type: Number, default: 0},
    image: { type: mongoose.Schema.Types.ObjectId, ref: Image, required: false},
    category: { type: [mongoose.Schema.Types.ObjectId], ref: Image, required: false},
    supplier: { type: [mongoose.Schema.Types.ObjectId], ref: Image, required: false},
    createdBy: { type:mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: { type:mongoose.Schema.Types.ObjectId, ref: Admin},
}, { timestamps: true});

product.pre('save' || 'findByIdAndUpdate', function (next) {
    if (this.name) this.slug = getSlug(removeAccents(this.name))
    next();
});

module.exports = mongoose.model('product', product);