
import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/profile`,
            withCredentials: true
        })
    }

    getProfile = (idUser) => this.service.get(`/${idUser}`)
    getOnlyVetHospital = () => this.service.get(`/onlyVetHospital`)


}