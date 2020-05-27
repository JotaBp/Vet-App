const express = require("express")
const router = express.Router()

const Pet = require("../models/pet.model")
const CiteHospital = require("../models/citeHospital.model")
const User = require("../models/user.model")
const QueryClient = require("../models/queryClient.model")

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


router.get('/allPets', ensureLoggedIn, (req, res, next) => {
    Pet.find()
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//Muestra las mascotas del Usuario
router.get('/petsFromClient/:idUser', ensureLoggedIn, (req, res, next) => {
    Pet.find({
            owner: req.params.idUser
        })
        .populate([{
            path: "vetHospital",
            model: "User"
        },
        {
            path: "owner",
            model: "User"

        },
        {
            path: "queryClient",
            model: "QueryClient"
        },
        {
            path: "citeHospital",
            user: "CiteHospital"
        }
    ])
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            next(new Error(err))
        })
})

router.get('/petDetails/:id', ensureLoggedIn, (req, res, next) => {
    Pet.findById(req.params.id)
        .populate([{
                path: "vetHospital",
                model: "User"
            },
            {
                path: "owner",
                model: "User"

            },
            {
                path: "queryClient",
                model: "QueryClient"
            },
            {
                path: "citeHospital",
                user: "CiteHospital"
            }
        ])
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//nueva mascota

router.post('/createPet', ensureLoggedIn, (req, res, next) => {

    Pet.create(req.body)
        .then(createdPet => User.findByIdAndUpdate(createdPet.owner, {
            $push: {
                pets: createdPet._id
            }
        }, {
            new: true
        }))
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            return next(new Error(err))
        })
})

//edicion de pet

router.post('/pet/:id/edit', ensureLoggedIn, (req, res, next) => {

    Pet.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(updatedPet => res.json(updatedPet))
        .catch(err => next(new Error(err)))
})

//eliminar pet
router.post('/pet/:id/delete', ensureLoggedIn, (req, res, next) => {
    Pet.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})






module.exports = router


// router.post('/pet/:id/edit', ensureLoggedIn, (req, res, next) => {

//     Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then(updatedPet => {
//             res.json(`/api/petDetails/${updatedPet._id}`)})
//         .catch(err => next(new Error(err)))
// })