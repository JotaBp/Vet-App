require('dotenv').config()
const mongoose = require('mongoose')
const faker = require('faker')

const Client = require('../models/client.model')
const Pet = require('../models/pet.model')
const VetHospital = require('../models/vetHospital.model')


mongoose.connect(`${process.env.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)

Client.collection.drop()
Pet.collection.drop()
VetHospital.collection.drop()

const clients = [{
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
let allPets = []

function createHospital() {
  return {
    hospitalName: faker.name.firstName(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    password: bcrypt.hashSync('123', salt),
    profilePicPath: faker.image.nature(),
    phoneNumber: faker.phone.phoneNumber(),
    rating: 6,
    chiefVetName: faker.name.firstName(),
    chiefVetSurname: faker.name.lastName(),
    collegiateNumber: faker.random.number(),
    status: "active",
    client: allClients[randomNum(allClients.length)]._id,
    // client: [allClients[randomNum(allClients.length)]._id, allClients[randomNum(allClients.length)]._id, allClients[randomNum(allClients.length)]._id],

    pet: allPets[randomNum(allPets.length)]._id,
    // pet: [allPets[randomNum(allPets.length)]._id, allPets[randomNum(allPets.length)]._id, allPets[randomNum(allPets.length)]._id],

    citeHospital: [],
    queryClient: []

    //aquí configuramos todo el faker con las propiedades que debe tener el hospital
    //ojo, hacer un random de allPets para añadirle pets a cada hospital
  }
}



Client.create(clients)
  .then(clientsCreated => {
    allClients = clientsCreated
    let allPromises = []
    clientsCreated.forEach(client => {
      let newPet = {
        name: "Chupino",
        species: "Canis familiaris",
        postPicPath: "https://www.perroanuncios.com/img/classifieds/gran-danes-arlequin-y-blue-1.jpg",
        breed: "Gran Danes",
        owner: client._id
      }
      allPromises.push(Pet.create(newPet))
    })
    return Promise.all(allPromises)
  })

  .then((petsCreated) => {
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
    let allPromises = []
    let hospitals = new Array(1).fill(" ").map(vetClinic => 
      vetClinic = createHospital())


    return VetHospital.create(hospitals)
  })

  .then(hospitalsCreated => {

    allVetHospitals = hospitalsCreated

    let updatedClient
    let updatedPet

    hospitalsCreated.forEach(hospital => {

      console.log("El objeto" + hospital)

      updatedClient = Client.findByIdAndUpdate(hospital.client, {
        $push: {
          vetHospital: hospitalsCreated._id
        },
      }, {
        new: true
      })
      updatedPet = Pet.findByIdAndUpdate(hospital.pet, {
        $push: {
          vetHospital: hospitalsCreated._id
        }
      }, {
        new: true
      })
    })
    return Promise.all([updatedClient, updatedPet])
  })
  .then(() => console.log("Resgistro creado!"))
  .catch((err) => console.log("Error", err))
  

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








