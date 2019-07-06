const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')

// Load User model
const User = require('../models/User')
const {
    forwardAuthenticated
} = require('../configs/auth')

// Login Page
router.get('/', forwardAuthenticated, (req, res) => res.render('login'))

// Login
router.post('/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
})

// Logout
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'You are logged out')
    res.redirect('/')
})

module.exports = router