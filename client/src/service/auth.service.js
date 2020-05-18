import axios from 'axios'

export default class services {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        })
    }

    signup = ({ username, email, password, role }) => this.service.post('/signup', { username, email, password, role })
    login = ({ username, password }) => this.service.post('/login', { username, password })
    logout = () => this.service.post('/logout')
    isLoggedIn = () => this.service.get('/loggedin')
}