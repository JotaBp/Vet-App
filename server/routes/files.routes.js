const express = require('express')
const router = express.Router()

const uploader = require('../configs/cloudinary.config')

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


router.post('/profileSignupUpload', ensureLoggedIn, uploader.single("profilePicPath"), (req, res, next) => {
    console.log("entra")
        if (!req.file) {
            console.log("problem")
            next(new Error('No file uploaded!'))
            return
        }
    
        res.json({ secure_url: req.file.secure_url })
    })


router.post('/upload', ensureLoggedIn, uploader.single("petPicPath"), (req, res, next) => {
    if (!req.file) {
        next(new Error('No file uploaded!'))
        return
    }

    res.json({ secure_url: req.file.secure_url })
})

module.exports = router