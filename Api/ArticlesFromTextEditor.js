const express = require('express')
const aritclesfromTE = require('../Schema/articlesFromTextEditor')
const router = express.Router()

// get all articles
router.get('/',(req,res) =>{
    aritclesfromTE.find({})
        .then((item) => res.json(item))
})

// get a article
router.get('/:id',(req,res)=>{
    const id = req.params.id;
    console.log("fdsafgdsags",id)
    aritclesfromTE.findOne({_id : id})
        .then((article) => {
            res.json(article)
        })
        .catch((err) => console.log(err))
})

// post article


router.post('/', (req, res) => {
    if (req.body.check == "",req.body.image == "",req.body.title == "",req.body.content == ""||req.body.user_id=="" || req.body.cate_id == ""|| req.body.create_time == "" ) { 
        return res.json({
            error:true
        })
    } else {
        const article = new aritclesfromTE(req.body)
        console.log(">>>>>>>>>",article)
        article.save()
            .then((article) => res.json(article))
            .catch(error => {
                res.send('error',error)
            })
    }

})

// update article

router.post('/:_id', (req, res, next) => {
   
    console.log("body",req.body)
    aritclesfromTE.updateOne({ _id:req.params._id }, req.body)
        .then((item) => res.json({
            error:true,
            item
        }))
        .catch(next)
})

// update article 

router.delete('/:_id', (req, res) => {
    console.log("id delete article: >",req.params._id)
    aritclesfromTE.deleteOne({ _id: req.params._id })
        .then((item) => res.json(item))
})


module.exports = router