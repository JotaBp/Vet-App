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

const Client = require('../models/client.model')
const Pet = require('../models/pet.model')
const VetHospital = require('../models/vetHospital.model')
const CiteHospital = require('../models/citeHospital.model')
const QueryClient = require('../models/queryClient.model')

const dropClient = Client.collection.drop()
const dropPet = Pet.collection.drop()
const dropVetHospital = VetHospital.collection.drop()
const dropCiteHospital = CiteHospital.collection.drop()
const dropQueryClient = QueryClient.collection.drop()

const vetHospitalQuantity = 10
const petQuantity = 50
const clientQuantity = 30
const citeHospitalQuantity = 100
const queryClientQuantity = 150



const randomNum = (max) => Math.floor(Math.random() * (max - 1))
// const randomNum = (max => Math.floor(Math.random() * (max - 1)))

let allClients = []
let allVetHospitals = []
let allQueryClients = []
let allCiteHospitals = []
let allPets = []

function createClient() {
  return {

    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123', salt),
    profilePicPath: faker.image.avatar(),
    address: faker.address.streetAddress(),
    phoneNumber: faker.phone.phoneNumber(),
    status: "acive",
    pets: [],
    queryClient: [],
    vetHospital: [],
    citeHospital: []
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
    hospitalName: faker.name.firstName(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123', salt),
    hospitalPicPath: faker.image.nature(),
    phoneNumber: faker.phone.phoneNumber(),
    rating: randomNum(10),
    chiefVetName: faker.name.firstName(),
    chiefVetSurname: faker.name.lastName(),
    collegiateNumber: faker.random.number(),
    status: "active",
    client: [
      allClients[randomNum(allClients.length)]._id, allClients[randomNum(allClients.length)]._id,
      allClients[randomNum(allClients.length)]._id, allClients[randomNum(allClients.length)]._id,
      allClients[randomNum(allClients.length)]._id, allClients[randomNum(allClients.length)]._id
    ],

    pet: [
      allPets[randomNum(allPets.length)]._id, allPets[randomNum(allPets.length)]._id, 
      allPets[randomNum(allPets.length)]._id,allPets[randomNum(allPets.length)]._id,
      allPets[randomNum(allPets.length)]._id,allPets[randomNum(allPets.length)]._id
    ],
    citeHospital: [],
    queryClient: []

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
    status: "pending-client",
    vetHospital: allVetHospitals[randomNum(allVetHospitals.length)]._id
  }
}

//para hacer el primer seed cambiar Promise.all por Promise.resolve

Promise.all([dropClient, dropPet, dropVetHospital, dropCiteHospital, dropQueryClient])
  
.then(() => {
    let clients = new Array(clientQuantity).fill(" ")
      .map(user => user = createClient())
    return Client.create(clients)
  })

  .then(clientsCreated => {
    allClients = clientsCreated

    let petCreated = new Array(petQuantity).fill(" ")
      .map(pet => pet = createPet())

    return Pet.create(petCreated)
  })

  .then(petsCreated => {
    allPets = petsCreated
    let allPromises = []
    petsCreated.forEach(pet => {
      allPromises.push(Client.findByIdAndUpdate(pet.owner, {
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
    return VetHospital.create(hospitals)
  })

  .then(hospitalsCreated => {

    allVetHospitals = hospitalsCreated

    let updatedClient
    let updatedPet

    hospitalsCreated.forEach(hospital => {

      updatedClient = Client.findByIdAndUpdate(hospital.client, {
        $push: {
          vetHospital: hospital._id
        }
      }, {
        new: true
      })
      updatedPet = Pet.findByIdAndUpdate(hospital.pet, {
        $push: {
          vetHospital: hospital._id
        }
      }, {
        new: true
      })
    })
    return Promise.all([updatedClient, updatedPet])
    // return Promise.all(updatedPet)
  })

  .then(() => {
    let citeHospitals = new Array(citeHospitalQuantity).fill(" ").map(cite =>
      cite = createCite())
    return CiteHospital.create(citeHospitals)
  })

  .then(citesCreated => {
    allCiteHospitals = citesCreated
    let updatedHospital
    let updatedPet

    citesCreated.forEach(cite => {
      updatedHospital = VetHospital.findByIdAndUpdate(cite.vetHospital, {
        $push: {
          citeHospital: cite._id
        }
      }, {
        new: true
      })
      updatedPet = Pet.findByIdAndUpdate(cite.pet, {
        $push: {
          citeHospital: cite._id
        }
      }, {
        new: true
      })
    })
    return Promise.all([updatedHospital, updatedPet])
  })
  .then(() => {
    let queryClient = new Array(queryClientQuantity).fill(" ")
      .map(query => query = createQuery())

    return QueryClient.create(queryClient)
  })

  .then(queriesCreated => {

    allQueryClients = queriesCreated

    let updatedHospital
    let updatedPet

    queriesCreated.forEach(query => {

      updatedHospital = VetHospital.findByIdAndUpdate(query.vetHospital, {
        $push: {
          queryClient: query._id
        }
      }, {
        new: true
      })

      updatedPet = Pet.findByIdAndUpdate(query.pet, {
        $push: {
          queryClient: query._id
        }
      }, {
        new: true
      })


    })
    return Promise.all([updatedHospital, updatedPet])
  })

  .then(() => {
    let promises = []
    console.log("las allcitehospitals son: " + allCiteHospitals)
    allCiteHospitals.forEach((cite, idx) => {

      if (idx % 3 === 0) {
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
    console.log(updatedCites)
    promises.push(updatedCites.forEach(cite => {
      console.log("que hay en cite:" + cite)
      console.log("que hay en cite.pet:" + cite.pet)
      console.log("que hay en cite.vetHospital:" + cite.vetHospital)
      QueryClient.findByIdAndUpdate(cite.queryClient, {
        pet: cite.pet,
        vetHospital: cite.vetHospital
      })
    }))
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
  .catch(err => console.log(`An error occurred while creating the CLIENT: ${err}`))








