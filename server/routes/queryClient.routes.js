const express = require("express")
const router = express.Router()

const Query = require("../models/queryClient.model")

//Muestra las consultas relacionadas con el hospital
router.get('/queryFromHospital/:idHospital', (req, res, next) => {
    Query.find({vetHospital: req.params.idHospital})
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//Muestra las consultas de cada mascota
router.get('/queryFromPet/:idPet', (req, res, next) => {
    Query.find({pet: req.params.idPet})
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

router.get('/queryDetails/:id', (req, res, next) => {
    Query.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//nueva mascota

router.post('/query/create', (req, res, next) => {
    
    Query.create(req.body)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})

//edicion de query
router.get('/query/:id/edit', (req, res, next) => {

    Query.findById(req.params.id)
        .then(data => res.json(`/api/query/${data._id}/edit`, { data }))
        .catch(err => next(new Error(err)))
})

router.post('/query/:id/edit', (req, res, next) => {

    Query.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedQuery => {
            res.json(`/api/queryDetails/${updatedQuery._id}`)})
        .catch(err => next(new Error(err)))
})

//eliminar query
router.post('/query/:id/delete', (req, res, next) => {
    Query.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(err => next(new Error(err)))
})



module.exports = router