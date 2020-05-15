import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getPets = () => this.service.get('/allPets')

}


// baseURL: `${process.env.REACT_APP_API_URL}`