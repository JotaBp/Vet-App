const express = require("express")
const router = express.Router()

const CiteHospital = require("../models/citeHospital.model")


//Muestra las cites del hospital
router.get('/citesFromUser/:idUser', (req, res, next) => {
    CiteHospital.find({vetHospital: req.params.idHospital})
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})
//Muestra las cites de la mascota
router.get('/citesFromPet/:idPet', (req, res, next) => {
    CiteHospital.find({pet: req.params.idPet})
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})
router.get('/citeDetails/:id', (req, res, next) => {
    CiteHospital.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})

//nueva cite

router.post('/createCite', (req, res, next) => {
    
    CiteHospital.create(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})

//edicion de cite
router.get('/cite/:id/edit', (req, res, next) => {

    CiteHospital.findById(req.params.id)
        .then(data => res.status(200).json(`/api/cite/${data._id}/edit`, { data }))
        .catch(err => next(new Error(err)))
})

router.post('/cite/:id/edit', (req, res, next) => {

    CiteHospital.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedCite => res.status(200).json(`/api/citeDetails/${updatedCite.id}`))
        .catch(err => next(new Error(err)))
})

//eliminar cite
router.post('/cite/:id/delete', (req, res, next) => {
    CiteHospital.findByIdAndRemove(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})


module.exports = router