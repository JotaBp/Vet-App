import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/query`,
            withCredentials: true
        })
    }

    queryFromHospital = idHospital => this.service.get(`/queryFromHospital/${idHospital}`)
    queryFromPet = idPet => this.service.get(`/queryFromPet/${idPet}`)
    queryCreate = theQuery => this.service.post(`/createQuery`, theQuery)
    // citeEdit
    // citeDelte
}