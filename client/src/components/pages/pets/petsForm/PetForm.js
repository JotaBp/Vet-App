import React, { Component } from 'react'
import PetService from '../../../../service/pet.service'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class CiteForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            species: '',
            // petPicPath: '',
            breed: '',
            owner: ''
        }
        this.petService = new PetService()
    }


    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        let newPet = {...this.state}
        newPet.owner = this.props.ownerID
        this.petService.petCreate(newPet)
            .then(() => this.props.finishPetPost())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <h1>Nueva Mascota</h1>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="especie">
                        <Form.Label>Especie</Form.Label>
                        <Form.Control name="species" type="text" value={this.state.species} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="raza">
                        <Form.Label>Raza</Form.Label>
                        <Form.Control name="breed" type="text" value={this.state.breed} onChange={this.handleInputChange} />
                    </Form.Group>

                    {/* <Form.Group controlId="img">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleInputChange} />
                    </Form.Group> */}
                    <Button variant="dark" onClick={() => this.props.closeModal()} style={{ marginRight: '10px' }}>Cerrar</Button>
                    <Button variant="dark" type="submit">Nueva mascota</Button>
                </Form>
            </Container>
        )
    }
}

export default CiteForm