const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const Articles = new Schema({
    textbody:{type:String},
    create_time:{type:String},
    title : {type: String},
    image:{type:String},
    user_Id:{type:String},
    cate_Id:{type:String}
},{
    timestamps: true
})
module.exports = mongoose.model('Articles',Articles,'Articles')