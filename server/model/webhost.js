const mongoose = require('mongoose')
const Admin = require('./admin')

const webhook = new mongoose.Schema({
    name: {type: String, required: true},
    url: {type: String, require: true},
    headers: {type: Object, require: true},
    events: {type: Array, require: true},
    enabled: {type: Boolean, default: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin}
}, { timestamps: true })

module.exports = mongoose.model('webhook', webhook)