const express = require("express")
const router = express.Router()

const Pet = require("../models/pet.model")

router.get('/allPets', (req, res, next) => {
    Pet.find()
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//Muestra las mascotas del Usuario
router.get('/petsFromUser/:idUser', (req, res, next) => {
    Pet.find({vetHospital: req.params.idUser})
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.get('/petDetails/:id', (req, res, next) => {
    Pet.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//nueva mascota

router.post('/createPet', (req, res, next) => {
    
    Pet.create(req.body)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//edicion de pet
router.get('/pet/:id/edit', (req, res, next) => {

    Pet.findById(req.params.id)
        .then(data => res.json(`/api/pet/${data._id}/edit`, { data }))
        .catch(err => next(new Error(err)))
})

router.post('/pet/:id/edit', (req, res, next) => {

    Pet.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedPet => {
            console.log("a ver si puedo ver lo que es el puto data de los cojones" + updatedPet)
            res.json(`/api/petDetails/${updatedPet._id}`)})
        .catch(err => next(new Error(err)))
})

//eliminar pet
router.post('/pet/:id/delete', (req, res, next) => {
    Pet.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})






module.exports = router