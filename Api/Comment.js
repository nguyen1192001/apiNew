const express = require('express')
const commentInnitial = require('../Schema/comments')
const check = require('./CheckNatureLanguage')
const router = express.Router()

// get all comments
router.get('/', (req, res) => {
    commentInnitial.find({})
        .then((item) => res.json(item))
})

// get a comment
router.get('/:id', (req, res) => {
    const id = req.params.id;
    commentInnitial.findOne({ _id: id })
        .then((commnet) => {
            res.json(commnet)
        })
        .catch((err) => console.log(err))
})

// post comment

router.post('/', (req, res) => {
    if (req.body.user_Id == " " || req.body.article_Id == " " ||
        req.body.cmt_Content == " " || req.body.create_Time == " ") {
        return res.json({
            error: true
        })
    } else {
        let checkLGcmt = check.checkNatureLanguage(req.body.cmt_Content)
        if(checkLGcmt === 1){
            console.log("check thanhf coong")
            return res.json({
                error: true
            })
        }else{
            const comments = new commentInnitial(req.body)
            comments.save()
                .then((comment) => res.json(comment))
                .catch(error => {
                    res.send('error', error)
                })
        }
    }
})

// update comment

router.post('/:_id', (req, res, next) => {

    console.log("body", req.body)
    commentInnitial.updateOne({ _id: req.params._id }, req.body)
        .then((item) => res.json({
            error: true,
            item
        }))
        .catch(next)
})

// update comment 

router.delete('/:_id', (req, res) => {
    commentInnitial.deleteOne({ _id: req.params._id })
        .then((item) => res.json(item))
})


module.exports = router