const express = require('express')
const jsonData = require('../public/data/data.json')
// const postData = require('../public/data/post.json')
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const log = console.log
const { ensureAuthenticated, forwardAuthenticated } = require('../configs/auth')
const router = express.Router()


// Dashboard
// router.get('/', ensureAuthenticated, (req, res) =>
//   res.render('dashboard', {
//     user: req.user
//   })
// )


router.get('/', async (req, res) => {
    try {
        await Post.find({}, (err, posts) => {
            if (err) {
                log('Error!')
            } else {
                res.render('index', {
                    posts: posts,
                    title: 'Yay Kyi Yar Travel & Tour: Search Yay Kyi Yar Myanmar Hotels, Cheap Flights, Vacations, Tours',
                    navTitle: 'Yay Kyi Yar',
                    company: 'Travel & Tour Co., Ltd.',
                    jsonData: jsonData
                    // postData: postData
                })
            }
        }).sort({
            date: 'desc'
        })
    } catch (e) {
        res.status(200).send(e)
    }
})


module.exports = router