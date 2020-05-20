import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cite`,
            withCredentials: true
        })
    }

    citeFromHospital = idHospital => this.service.get(`/citesFromHospital/${idHospital}`)
    citesFromPet = idPet => this.service.get(`/citesFromPet/${idPet}`)
    createCiteResponse = theCiteResponse => this.service.post(`/createCiteResponse`, theCiteResponse)
    createCite = theCite => this.service.post(`/createCite`, theCite)
    // citeEdit
    // citeDelte
}