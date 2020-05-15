import React, { Component } from 'react'
import PetService from '../../../../service/pet.service'

import './PetList.css'

import PetCard from './PetCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class PetsList extends Component {

constructor() {
    super()
    this.state = { pets: [] }
    this.petService = new PetService()
}


getAllPets = () => {
    this.petService.getPets()
        .then(response => this.setState({ pets: response.data }))
        .catch(err => console.log(err))
}


componentDidMount = () => {
    this.getAllPets()
}


render() {
    return (
        <Container as="section">

            <h1>Listado de mascotas</h1>


            <Row className="pet-list">
                {this.state.pets && this.state.pets.map(pet => <PetCard key={pet._id} {...pet} />)}
            </Row>



        </Container>
    )
}
}

export default PetsList