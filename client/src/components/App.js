import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navigation from './ui/navbar/Navbar'
import PetsList from './pages/pets/pets-List/PetsList'
import HomePage from './pages/homePage/HomePage'



class App extends Component {




  render() {


    return (
      <>
        <Navigation />

        <main>

          <Switch>
            <Route path="/" exact render= {() => <HomePage/> } />
            <Route path="/pets" render= {() => <PetsList/>} />
            <Route path=""/>
          </Switch>

        </main>
      </>
    )
  }
}

export default App
