const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Analytic = new Schema({
    quantity: { type: Number },
    date: { type: String }
},{
    timestamps: true
})
module.exports = mongoose.model('Analytic',Analytic,'Analytic')