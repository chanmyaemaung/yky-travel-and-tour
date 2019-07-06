const express = require('express')
const router = express.Router()
const passport = require('passport')
const { forwardAuthenticated } = require('../configs/auth')

// Login Page
router.get('/', forwardAuthenticated, (req, res) => res.render('login'))

// Login
router.post('/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/blog/new',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
})

// Logout
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'You are logged out')
    res.redirect('/login')
})

module.exports = router