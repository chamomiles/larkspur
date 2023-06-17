const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Word = require('../models/Word')

// @desc    Login page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    try {
        // const words = Word.find().lean()
        // res.render('dashboard', {
        //     name: req.user.displayName,
        //     words
        // })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router