const express = require("express")
const router = express.Router()

const Query = require("../models/queryClient.model")

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')


//Muestra las consultas relacionadas con el hospital
router.get('/queryFromHospital/:idHospital', ensureLoggedIn, (req, res, next) => {
    Query.find({
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

//Muestra las consultas de cada mascota
router.get('/queryFromPet/:idPet', ensureLoggedIn, (req, res, next) => {
    Query.find({
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

router.get('/queryDetails/:id', ensureLoggedIn, (req, res, next) => {
    Query.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})

//nueva query

router.post('/createQuery', ensureLoggedIn, (req, res, next) => {

    Query.create(req.body)
        .then(createdQuery => {
            let updatePet = Pet.findByIdAndUpdate(createdQuery.pet, {$push: {queryClient: createdQuery._id}}, {new:true})
            let updateHospital = User.findByIdAndUpdate(createdQuery.vetHospital, {$push: {queryClient: createdQuery._id}}, {new:true})
            return Promise.all([updatePet, updateHospital])

        })
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})

//edicion de query
router.get('/query/:id/edit', ensureLoggedIn, (req, res, next) => {

    Query.findById(req.params.id)
        .then(data => res.status(200).json(`/api/query/${data._id}/edit`, {
            data
        }))
        .catch(err => next(new Error(err)))
})

router.post('/query/:id/edit', ensureLoggedIn, (req, res, next) => {

    Query.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(updatedQuery => {
            res.status(200).json(`/api/queryDetails/${updatedQuery._id}`)
        })
        .catch(err => next(new Error(err)))
})

//eliminar query
router.post('/query/:id/delete', ensureLoggedIn, (req, res, next) => {
    Query.findByIdAndRemove(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
})



module.exports = router