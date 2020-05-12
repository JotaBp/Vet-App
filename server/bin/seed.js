require('dotenv').config()
const mongoose = require('mongoose')
const faker = require('faker')

const Client = require('../models/client.model')
const Pet = require('../models/pet.model')

mongoose.connect(`${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })

const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)

Client.collection.drop();
Pet.collection.drop()

const clients = [
  {
    name: "Paquito",
    surname: "Perez",
    email: "paquito@perez.com",
    password: "123",
    profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
    address: "Calle Leonor de la Vega, 11, Madrid",
    phoneNumber: 643434783,
    status: "acive",

  },
  {
    name: "Estefania",
    surname: "Lopez",
    email: "estefania@lopez.com",
    password: "123",
    profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
    address: "Paseo de Juan Antonio Vallejo-Nájera Botas, 42, Madrid",
    phoneNumber: 643434783,
    status: "acive",

  }, 
  {
    name: "Roque",
    surname: "Tocame",
    email: "roque@tocame.com",
    password: "123",
    profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
    address: "Paseo de las Acacias, 65, Madrid",
    phoneNumber: 643434783,
    status: "acive",

  },  
  {
    name: "Pepita",
    surname: "Rodriguez",
    email: "pepita@rodriguez.com",
    password: "123",
    profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
    address: "Calle Aguila, 4, Madrid",
    phoneNumber: 643434783,
    status: "acive",

  },  
  {
    name: "Peter",
    surname: "Elanguila",
    email: "peter@elanguila.com",
    password: "1234",
    profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
    address: "Calle Leonor de la Vega, 11, Madrid",
    phoneNumber: 643434783,
    status: "acive",

  },  
  {
    name: "Paquito",
    surname: "Perez",
    email: "paquito@perez.com",
    password: "1234",
    profilePicPath: 'https://image.freepik.com/vector-gratis/perfil-empresario-dibujos-animados_18591-58479.jpg',
    address: "Calle Leonor de la Vega, 11, Madrid",
    phoneNumber: 643434783,
    status: "acive",

  }
]

const randomNum = (max) => Math.floor(Math.random() * (max - 1))

let allClients = []
let allVetHospitals = []
let allQueryClients = []


Client.create(clients)
         .then(allClient => {
           allClients = allClient

           allClients.forEach(client => {
             let newPet = {
              name: "Chupino",
              species: "Canis familiaris",
              postPicPath: "https://www.perroanuncios.com/img/classifieds/gran-danes-arlequin-y-blue-1.jpg",
              breed: "Gran Danes",
              owner: client._id}
            Pet.create(newPet) 
              .then(petCreated => Client.findByIdAndUpdate(petCreated.owner, {$push: {pets: petCreated._id}}))
              .catch(err => console.log(`An error occurred while creating the PETS: ${err}`))
           })

          })
          .then(() => console.log("---------------------------------------------Seed realizado"))
          // .then(allClient => {
          //   allClients = allClient

          //   allClient.forEach
          // })
          .catch(err => console.log(`An error occurred while creating the CLIENT: ${err}`))