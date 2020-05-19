import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cite`,
            withCredentials: true
        })
    }

    citeFromHospital = idHospital => this.service.get(`/citeFromHospital/${idHospital}`)
    // citesFromPet = idPet => this.service.get(`/citesFromPet/${idPet}`)
    // citeDetails = citeId => this.service.get(`/citeDetails/${citeId}`)
    createCite = theCite => this.service.post(`/createCite`, theCite)
    // citeEdit
    // citeDelte
}