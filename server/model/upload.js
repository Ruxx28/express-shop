const mongoose = require('mongoose');
const Admin = require('./admin')

const uploadSchema = new mongoose.Schema({
    name: { type: String, require: true },
    url: { type: String, require: true },
    ext: String,
    size: Number,
    width: Number,
    height: Number,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: Admin}
}, { timestamps: true });

module.exports = mongoose.model('upload_file', uploadSchema);