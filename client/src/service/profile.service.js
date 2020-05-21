
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
    // getDetailsToUpdateProfile = (id) => this.service.get(`/${id}/edit`)
    // updateProfile  = (id, data) => this.service.put(`/${id}/edit`, {data})
    // deleteProfile = (id) => this.service.post(`/${id}/delete`)

}