const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comments = new Schema({
   user_Id:{type:String},
   article_Id:{type:String},
   cmt_Content:{type:String},
   create_Time:{type:String}
},{
    timestamps: true
})
module.exports = mongoose.model('Comments',Comments,'Comments')