const express = require("express")
const router = express.Router()

const Pet = require("../models/pet.model")

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


router.get('/allPets', ensureLoggedIn, (req, res, next) => {
    Pet.find()
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//Muestra las mascotas del Usuario
router.get('/petsFromUser/:idUser', ensureLoggedIn, (req, res, next) => {
    Pet.find({vetHospital: req.params.idUser})
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.get('/petDetails/:id', ensureLoggedIn, (req, res, next) => {
    Pet.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//nueva mascota

router.post('/createPet', ensureLoggedIn, (req, res, next) => {
    
    Pet.create(req.body)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//edicion de pet
router.get('/pet/:id/edit', ensureLoggedIn, (req, res, next) => {

    Pet.findById(req.params.id)
        .then(data => res.json(`/api/pet/${data._id}/edit`, { data }))
        .catch(err => next(new Error(err)))
})

router.post('/pet/:id/edit', ensureLoggedIn, (req, res, next) => {

    Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedPet => {
            res.json(`/api/petDetails/${updatedPet._id}`)})
        .catch(err => next(new Error(err)))
})

//eliminar pet
router.post('/pet/:id/delete', ensureLoggedIn, (req, res, next) => {
    Pet.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})






module.exports = router