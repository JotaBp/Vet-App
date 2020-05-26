import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/pet`,
            withCredentials: true
        })
    }

    getPetsFromClient = (clientId) => this.service.get(`/petsFromClient/${clientId}`)
    petCreate = thePet => this.service.post(`/createPet`, thePet) 
    getPetDetails = petId => this.service.get(`/petDetails/${petId}`)  
    editPet = (petId, updatedPet) => this.service.post(`/pet/${petId}/edit`, updatedPet)
    deletePet = petId => this.service.post(`/pet/${petId}/delete`)

}