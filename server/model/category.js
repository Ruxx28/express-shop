const mongoose = require('mongoose')
const Admin = require('./admin')
const Product = require('./product')
const { getSlug, removeAccents } = require('../utils/formatValue')

const category = new mongoose.Schema({
    products: {type: [mongoose.Schema.Types.ObjectId], ref: Product},
    name: {type: String, require: true},
    slug: {type: String, require: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin}
}, { timestamps: true });


category.pre('save' || 'findByIdAndUpdate', function (next) {
    if (this.name) this.slug = getSlug(removeAccents(this.name))
    next();
});


module.exports = mongoose.model('category', category);