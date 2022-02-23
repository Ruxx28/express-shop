const mongoose = require('mongoose')

const role = new mongoose.Schema({
    name: String,
    type: String,
    des: String,
    code: String
}, { timestamps: true })

module.exports = mongoose.model('role', role) 