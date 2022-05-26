const express = require('express')
const users = require('../Schema/users')
const analytic = require('../Schema/analytics')
const router = express.Router()

router.get('/', (req, res) => {
    users.find({})
        .then((item) => res.json(item))
        .catch((error) => {
            console.log("error", error)
        })

    var today = new Date();
    var date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

    analytic.findOne({ date: date }).then((item) => {
        if (item) {
            analytic.updateOne({ date: date }, { quantity: item.quantity + 1}).then((result) => {
            })
        } else {
            analytic.insertMany([{ quantity: 1, date: date }])
        }
    }).catch((error) => {
        console.log("error", error.message)
    })
})

router.get('/analytic',(req,res)=>{
    analytic.find({}).then((item) => res.json(item))
    .catch((error) => {
        console.log("error", error)
    })
})

// get a user
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log("fdsafgdsags", id)
    users.findOne({ _id: id })
        .then((user) => {
            res.json(user)
        })
        .catch((err) => console.log(err))
})

// post users

router.post('/', (req, res) => {
    if (req.body.user_Id == "" || req.body.userName == "" ||
        req.body.email == "" || req.body.password == "" || req.body.full_name == "" || req.body.avatar == "" || req.body.self_des == "") {
        return res.json({
            error: true
        })
    } else {
        const user = new users(req.body)
        user.save()
            .then((user) => res.json(user))
            .catch(error => {
                res.send('error', error)
            })
    }

})

// update user

router.post('/:_id', (req, res, next) => {

    console.log("body", req.body)
    users.updateOne({ _id: req.params._id }, req.body)
        .then((item) => res.json({
            error: true,
            item
        }))
        .catch(next)
})

// delete user 

router.delete('/:_id', (req, res) => {
    console.log("id delete user: >", req.params._id)
    users.deleteOne({ _id: req.params._id })
        .then((item) => res.json(item))
})


module.exports = router