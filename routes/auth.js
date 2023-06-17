const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth
// @route   GET /...
router.get('/', passport.authenticate(/* ... */))

// @desc    Auth callback
// @route   GET /...
router.get(/*...*/)

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router