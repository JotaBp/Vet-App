const express = require("express")
const router = express.Router()

const CiteHospital = require("../models/citeHospital.model")
const User = require("../models/user.model")
const Pet = require("../models/pet.model")

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


//Muestra las cites del hospital
router.get('/citeFromHospital/:idHospital', ensureLoggedIn, (req, res, next) => {
    CiteHospital.find({
            vetHospital: req.params.idHospital
        })
        .populate([{
                path: "vetHospital",
                model: "User"
            },
            {
                path: "pet",
                model: "Pet",
                populate: {
                    path: "owner",
                    model: "User"
                }
            }
        ])
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})
//Muestra las cites de la mascota
router.get('/citesFromPet/:idPet', ensureLoggedIn, (req, res, next) => {
    CiteHospital.find({
            pet: req.params.idPet
        })
        .populate([{
                path: "vetHospital",
                model: "User"
            },
            {
                path: "pet",
                model: "Pet",
                populate: {
                    path: "owner",
                    model: "User"
                }
            }
        ])
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})
router.get('/citeDetails/:id', ensureLoggedIn, (req, res, next) => {
    CiteHospital.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})

//nueva cite

router.post('/createCite', ensureLoggedIn, (req, res, next) => {

    CiteHospital.create(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})

//edicion de cite
router.get('/cite/:id/edit', ensureLoggedIn, (req, res, next) => {

    CiteHospital.findById(req.params.id)
        .then(data => res.status(200).json(`/api/cite/${data._id}/edit`, {
            data
        }))
        .catch(err => next(new Error(err)))
})

router.put('/cite/:id/edit', ensureLoggedIn, (req, res, next) => {

    CiteHospital.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(updatedCite => res.status(200).json(`/api/citeDetails/${updatedCite.id}`, ))
        .catch(err => next(new Error(err)))
})

//eliminar cite
router.delete('/cite/:id/delete', ensureLoggedIn, (req, res, next) => {
    CiteHospital.findByIdAndRemove(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})


module.exports = router