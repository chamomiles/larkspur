const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Word = require('../models/Word')

// @desc    Show all words
// @route   GET /stories
router.get('/', ensureAuth, (req, res) => {
    res.render('words')
})

module.exports = router