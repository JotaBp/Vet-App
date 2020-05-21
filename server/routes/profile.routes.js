const express = require("express")
const router = express.Router()

const ensureLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/login')

const User = require("../models/user.model");
const QueryClient = require("../models/queryClient.model");
const Pet = require("../models/pet.model");
const CiteHospital = require("../models/citeHospital.model");



router.get('/onlyVetHospital', (req, res, next) => {
    
    User.find({ role: "VETHOSPITAL" })
    .then(data => res.status(200).json(data))
    .catch(err => next(new Error(err)))
})

router.get('/:id/edit', (req, res, next) => {
    
    User.findById(req.params.id)
    .then(data => res.status(200).json(`/api/profile/${data._id}/edit`, {
        data
    }))
    .catch(err => next(new Error(err)))
})

router.put('/:id/edit', (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(data => res.status(200).json(data))
        .catch(err => next(new Error(err)))
        
    })

    router.post('/:id/delete', (req, res, next) => {
        User.findByIdAndRemove(req.params.id)
        .then((response) => res.status(200).json(response))
        .catch(err => next(new Error(err)))
        
    })
    
    router.get('/:id', (req, res, next) => {
    
        User.findById(req.params.id)
            .populate([
                {
                    path: "queryClient",
                    model: "QueryClient"
                },
                {
                    path: "citeHospital",
                    model: "CiteHospital"
                },
                {
                    path: "pets",
                    model: "Pet",
                    populate: {
                        path: "vetHospital",
                        model: "User"
                    }
                }
            ])
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.log(err)
                return next(new Error(err))})
    })
    
    module.exports = router
    
    // router.put('/:id', (req, res, next) => {
        //     const { id } = req.params;
//     Todo.findByIdAndUpdate(id, req.body)
//     .then(() => {
//       res.status(200).json({ message: `Todo ${id} updated` })
//     })
//     .catch(error => {
//       res.status(500).json({ message:'Something went wrong' })
//     })
//   })