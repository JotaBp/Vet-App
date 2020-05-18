import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/query`,
            withCredentials: true
        })
    }

    queryFromHospital = idHospital => this.service.get(`/queryFromHospital/${idHospital}`)
    // citesFromPet = idPet => this.service.get(`/citesFromPet/${idPet}`)
    // citeDetails = citeId => this.service.get(`/citeDetails/${citeId}`)
    queryCreate = theQuery => this.service.post(`/createQuery`, theQuery)
    // citeEdit
    // citeDelte
}