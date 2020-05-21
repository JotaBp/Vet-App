import React, { Component } from 'react'

import VetHospital from '../../../../service/profile.service'
import PetService from '../../../../service/pet.service'
import FileService from '../../../../service/file.service'


import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class PetForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            species: '',
            petPicPath: '',
            breed: '',
            owner: this.props.ownerID,
            vetHospital: ''
        }
        this.petService = new PetService()
        this.filesService = new FileService()

    }


    // displayHospitals = () => {
    //     return 
    // }


    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.petService.petCreate(this.state)
            .then(() => this.props.finishPetPost())
            .catch(err => console.log(err))
    }

    handleFileUpload = e => {

        const uploadData = new FormData()
        uploadData.append("petPicPath", e.target.files[0])
        this.filesService.handleUpload(uploadData)
            .then(response => {
                console.log('Subida de archivo finalizada! La URL de Cloudinray es: ', response.data.secure_url)
                this.setState({
                    ...this.state, petPicPath: response.data.secure_url
                })
            })
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
                        <Form.Label>Foto de tu mascota</Form.Label>
                        <Form.Control name="petPicPath" type="file" value={this.state.petPicPath} onChange={this.handleFileUpload} />
                    </Form.Group> */}

                    {/* <Form.Group controlId="select-hospital">
                        <Form.Label>Selecciona hospital</Form.Label>
                        <Form.Control as="select" name="vetHospital" value={this.state.vetHospital} onChange={this.handleInputChange} >
                            <option>Seleccionar</option>
                            {this.displayHospitals()}
                        </Form.Control>
                    </Form.Group> */}

                    <Button variant="dark" onClick={() => this.props.closeModal()}>Cerrar</Button>
                    <Button variant="dark" type="submit">Nueva mascota</Button>
                </Form>
            </Container>
        )
    }
}

export default PetForm