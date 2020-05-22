import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/pet`,
            withCredentials: true
        })
    }

    getPetsFromUser = () => this.service.get('/allPets')
    petCreate = thePet => this.service.post(`/createPet`, thePet) 


}