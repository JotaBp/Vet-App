import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navigation from './ui/navbar/Navbar'
import PetsList from './pages/pets/pets-List/PetsList'
import HomePage from './pages/homePage/HomePage'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import DashboardHospital from './pages/dashboard/dashboardHospital/DashboardHospital'
import ProfileClient from './pages/profile/profileClient/ProfileClient'
import ProfileHospital from './pages/profile/profileHospital/HospitalProfile' //Este no está terminado


import AuthService from '../service/auth.service'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.authService = new AuthService()
  }

  setTheUser = userObj => this.setState({ loggedInUser: userObj }, () => console.log('El estado de App ha cambiado:', this.state))

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authService.isLoggedIn()
        .then(response => this.setTheUser(response.data))
        .catch(() => this.setTheUser(false))
    }
  }

  render() {

    this.fetchUser()

    return (
      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <main>

          <Switch>
            <Route path="/" exact render= {() => <HomePage/> } />
            <Route path="/pets" render={() => this.state.loggedInUser ? <PetsList loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
            <Route path="/signup" render={props => <Signup {...props} setTheUser={this.setTheUser} />} />
            <Route path="/login" render={props => <Login {...props} setTheUser={this.setTheUser} />} />
            <Route path="/global" render={ props => this.state.loggedInUser ? <DashboardHospital {...props} loggedInUser={this.state.loggedInUser}/> : <Redirect to="/login" />} />
            <Route path="/profile" render={ props => this.state.loggedInUser ? <ProfileClient {...props} loggedInUser={this.state.loggedInUser}/> : <Redirect to="/login" />} />
            
            {/* <Route path="/profile/:id/edit" exact render={props => <HospitalProfile {...props} /> }/> */}
          </Switch>

        </main>
      </>
    )
  }
}

export default App
