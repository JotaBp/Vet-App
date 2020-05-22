require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(`${process.env.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const faker = require('faker')
const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)

const User = require('../models/user.model')
const Pet = require('../models/pet.model')
const CiteHospital = require('../models/citeHospital.model')
const QueryClient = require('../models/queryClient.model')

const dropUser = User.collection.drop()
const dropPet = Pet.collection.drop()
const dropCiteHospital = CiteHospital.collection.drop()
const dropQueryClient = QueryClient.collection.drop()

const vetHospitalQuantity = 15
const petQuantity = 60
const clientQuantity = 35
const citeHospitalQuantity = 100
const queryClientQuantity = 175

const randomNum = (max) => Math.floor(Math.random() * (max))


let allClients = []
let allVetHospitals = []
let allQueryClients = []
let allCiteHospitals = []
let allPets = []

function createClient() {
  return {

    username: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123', salt),
    profilePicPath: faker.image.avatar(),
    address: faker.address.streetAddress(),
    phoneNumber: faker.phone.phoneNumber(),
    status: "active",
    pets: [],
    queryClient: [],
    citeHospital: [],
    role: "CLIENT"
  }
}

function createPet() {
  return {
    name: faker.name.firstName(),
    species: "Felis catus",
    petPicPath: faker.image.cats(),
    breed: "Gato común",
    owner: allClients[randomNum(allClients.length)]._id,
    queryClient: [],
    vetHospital: [],
    citeHospital: []
  }

}

function createHospital() {
  return {
    username: faker.company.companyName(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123', salt),
    profilePicPath: faker.image.avatar(),
    hospitalPicPath: faker.image.nature(),
    phoneNumber: faker.phone.phoneNumber(),
    rating: randomNum(10),
    chiefVetName: faker.name.firstName(),
    chiefVetSurname: faker.name.lastName(),
    collegiateNumber: faker.random.number(),
    status: "active",
    pets: [
      allPets[randomNum(allPets.length)]._id, allPets[randomNum(allPets.length)]._id,
    ],
    citeHospital: [],
    queryClient: [],
    role: "VETHOSPITAL"

    //aquí configuramos todo el faker con las propiedades que debe tener el hospital
    //ojo, hacer un random de allPets para añadirle pets a cada hospital
  }
}

function createCite() {
  return {
    pet: allPets[randomNum(allPets.length)]._id,
    subject: faker.lorem.sentence(),
    description: faker.lorem.text(),
    date: faker.date.future(),
    queryClient: [],
    vetHospital: allVetHospitals[randomNum(allVetHospitals.length)]._id,

  }
}

function createQuery() {
  return {
    pet: allPets[randomNum(allPets.length)]._id,
    subject: faker.lorem.sentence(),
    description: faker.lorem.text(),
    date: faker.date.future(),
    status: "closed",
    citeHospital: allCiteHospitals[randomNum(allCiteHospitals.length)]._id,
    vetHospital: allVetHospitals[randomNum(allVetHospitals.length)]._id
  }
}

//para hacer el primer seed cambiar Promise.all por Promise.resolve

Promise.resolve([dropUser, dropPet, dropCiteHospital, dropQueryClient])

  .then(() => {
    let clients = new Array(clientQuantity).fill(" ")
      .map(user => user = createClient())
    return User.create(clients)
  })

  .then(clientsCreated => {
    allClients = clientsCreated

    let petCreated = new Array(petQuantity).fill(" ")
      .map(pet => pet = createPet())

    return Pet.create(petCreated)
  })

  .then(petsCreated => {
    console.log(petsCreated)
    allPets = petsCreated
    let allPromises = []
    petsCreated.forEach(pet => {
      allPromises.push(User.findByIdAndUpdate(pet.owner, {
        $push: {
          pets: pet._id
        }
      }, {
        new: true
      }))
    })
    return Promise.all(allPromises)
  })

  .then(updatedClients => {
    allClients = updatedClients
    let hospitals = new Array(vetHospitalQuantity).fill(" ").map(vetClinic =>
      vetClinic = createHospital())
    return User.create(hospitals)
  })

  .then(hospitalsCreated => {
    console.log(hospitalsCreated)
    allVetHospitals = hospitalsCreated
    let promises = []
    hospitalsCreated.forEach(hospital => {
      hospital.pets.forEach(pet => {
        promises.push( Pet.findByIdAndUpdate(pet._id, {
        $push: {
          vetHospital: hospital._id
          }
        }, {
          new: true
        })
        )
      })

    })
      return Promise.all(promises)
  })

  .then(() => {
    let citeHospitals = new Array(citeHospitalQuantity).fill(" ").map(cite =>
      cite = createCite())
    return CiteHospital.create(citeHospitals)
  })
  .then(citesCreated => {
    allCiteHospitals = citesCreated
    let promises = []



    citesCreated.forEach(cite => {
      promises.push(User.findByIdAndUpdate(cite.vetHospital, {
        $push: {
          citeHospital: cite._id,
          pets: cite.pet,
        }
      }, {
        new: true
      }))
      promises.push(Pet.findByIdAndUpdate(cite.pet, {
        $push: {
          citeHospital: cite._id
        }
      }, {
        new: true
      }))
    })
    return Promise.all(promises)
  })
  .then(() => {
    let queryClient = new Array(queryClientQuantity).fill(" ")
      .map(query => query = createQuery())

    return QueryClient.create(queryClient)
  })

  .then(queriesCreated => {

    allQueryClients = queriesCreated

    let promises = []

    queriesCreated.forEach(query => {

      promises.push(User.findByIdAndUpdate(query.vetHospital, {
        $push: {
          queryClient: query._id
        }
      }, {
        new: true
      }))

      promises.push(Pet.findByIdAndUpdate(query.pet, {
        $push: {
          queryClient: query._id
        }
      }, {
        new: true
      }))

      promises.push(CiteHospital.findByIdAndUpdate(query.citeHospital, {
        $push: {
          queryClient: query._id
        }
      }, {
        new:true
      }))


    })
    return Promise.all(promises)
  })

  .then(() => {
    let promises = []
    allCiteHospitals.forEach((cite, idx) => {
      if (idx % 2 === 0) {
        promises.push(CiteHospital.findByIdAndUpdate(cite._id, {
          queryClient: allQueryClients[randomNum(allQueryClients.length)]._id
        }, {
          new: true
        }))
      }
    })
    return Promise.all(promises)
  })
  .then(updatedCites => {
    let promises = []

    updatedCites.forEach(cite => {

      promises.push(QueryClient.findByIdAndUpdate(cite.queryClient, {
        pet: cite.pet,
        vetHospital: cite.vetHospital
      }))
    })
    return Promise.all(promises)
  })
  .then(() => console.log(">>>>>>>>>>>>>>>>>>>>>>Exito!!!"))
  .catch(err => console.log("Error", err))


  // .then(updatedClients => {
  //   allClients = updatedClientsÉxito




  //   //Con faker, crear un for que itere y me cree X numero de Hospitales
  //   //let hospitals = new Array(20).fill("").map(hospital => hospital = createHospital())
  //   //return CiteHospital.create(hospitals)
  //   //
  // })
  // .then(allHospitals => {
  // iterar con un foreach los hospitales e ir creando un número de consultas
  // a las que les asignas un random Client con su mascota y contenido Lorem
  // })
  // .catch(err => console.log(`An error occurred while creating the CLIENT: ${err}`))