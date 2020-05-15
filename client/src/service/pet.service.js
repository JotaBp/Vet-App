import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        })
    }

    getPets = () => this.service.get('/allPets')

}


// baseURL: 'http://localhost:5000/api'