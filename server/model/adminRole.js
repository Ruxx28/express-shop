const mongoose = require('mongoose')
const Role = require('./role')
const Admin = require('./admin')

const adminRole = new mongoose.Schema({
    conditions: {type: Array, required: false, default: []},
    properties: {type: Array, required: false, default: []},
    subject: {type: String, required: true},
    action: {type: String, required: true},
    role: {type: mongoose.Schema.Types.ObjectId, ref: Role, require: true},
}, { timestamps: true })

module.exports = mongoose.model('admin_role', adminRole)