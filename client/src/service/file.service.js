import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/files`,
            withCredentials: true
        })
    }

    handleUpload = theFile => this.service.post('/upload', theFile)
    handleUploadProfileImage = theFile => this.service.post('/profileSignupUpload', theFile)
}