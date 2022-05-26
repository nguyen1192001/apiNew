const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const ArticlesFromTextEditor = new Schema({
    check :{type:Number},
    content : {type: String},
    title : {type: String},
    image:{type:String},
    create_time:{type:String},
    user_Id:{type:String},
    cate_Id:{type:String}
},{
    timestamps: true
})
module.exports = mongoose.model('ArticlesFromTextEditor',ArticlesFromTextEditor,'ArticlesFromTextEditor')