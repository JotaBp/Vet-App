const express = require('express')
const router = express.Router()

const uploader = require('../configs/cloudinary.config')

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


router.post('/upload', ensureLoggedIn, uploader.single("profilePicPath"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'))
        return
    }

    res.json({ secure_url: req.file.secure_url })
})

module.exports = router