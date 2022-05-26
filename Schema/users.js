const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    userName: { type: String },
    email: { type: String },
    password: { type: String },
    full_name:{type:String},
    avatar:{type:String},
    self_des:{type:String}
},{
    timestamps: true
})
module.exports = mongoose.model('User',User,'Users')