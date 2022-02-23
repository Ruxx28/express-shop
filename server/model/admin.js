const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const Role = require('./role')
const { radomCode } = require('../utils/formatValue')

const admin = new mongoose.Schema({
    isActive: {type:Boolean, default: true},
    blocked: {type:Boolean, default: false},
    name: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    provider: { type: String, require: false },
    authJson: { type: Object, require: false },
    language: { type: String, default: 'vn'},
    role: {type:mongoose.Schema.Types.ObjectId, ref: Role},
    createdBy: {type: mongoose.Schema.Types.ObjectId},
    updatedBy: {type: mongoose.Schema.Types.ObjectId}
}, { timestamps: true })

admin.pre('save', function (next) {
    if (this.provider == 'google') {
        const newPass = radomCode(8)
        this.password = bcrypt.hashSync(newPass, bcrypt.genSaltSync(10));
        /* Role.findOne({code:'role_admin'})
        .then(v =>{
            return this.role = v._id
        })
        .catch(err =>{
            next(err)
        }) */
    }
    next();
});

admin.method({
    validPassword: function (password) {
        return bcrypt.compare(password, this.password)
    },
    generateJWT: function () {
        var today = new Date();
        var exp = new Date(today);
        exp.setDate(today.getDate() + 60)

        return jwt.sign({
            id: this._id,
            name: this.name,
            exp: parseInt(exp.getTime() / 1000),
        }, process.env.APP_SECRET || "ruxx28");
    },
    toAuthJSON: function () {
        return {
            id: this._id,
            name: this.name,
            token: this.generateJWT()
        }
    },
    toProfileJSONFor: function(user){
        return {
          name: this.name,
          //image: this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following:  false
        };
    }
})

module.exports = mongoose.model('admin', admin);