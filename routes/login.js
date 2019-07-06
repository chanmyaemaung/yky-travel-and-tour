const express = require('express')
const router = express.Router()
const passport = require('passport')

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/new',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
});

module.exports = router