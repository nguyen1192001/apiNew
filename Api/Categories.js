const express = require('express')
const categories = require('../Schema/categories')
const router = express.Router()

// get all categories
router.get('/',(req,res) =>{
    categories.find({})
        .then((item) => res.json(item))
})

// get a categories
router.get('/:id',(req,res)=>{
    const id = req.params._id;
    console.log("fdsafgdsags",id)
    categories.findOne({_id : id})
        .then((category) => {
            res.json(category)
        })
        .catch((err) => console.log(err))
})

// post categories

router.post('/', (req, res) => {
    if (req.body.cate_Id == ""|| req.body.cate_Name == "" ) { 
        return res.json({
            error:true
        })
    } else {
        const category = new categories(req.body)
        category.save()
            .then((category) => res.json(category))
            .catch(error => {
                res.send('error',error)
            })
    }

})

// update category

router.post('/:_id', (req, res, next) => {
   
    console.log("body",req.body)
    categories.updateOne({ _id:req.params._id }, req.body)
        .then((item) => res.json({
            error:true,
            item
        }))
        .catch(next)
})

// update category 

router.delete('/:_id', (req, res) => {
    categories.deleteOne({ _id: req.params._id })
        .then((item) => res.json(item))
})


module.exports = router