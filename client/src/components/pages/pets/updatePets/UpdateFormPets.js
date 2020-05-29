import React, { Component } from 'react'
import './UpdateFormPets.css'

import VetHospitalProfielService from '../../../../service/profile.service'
import PetService from '../../../../service/pet.service'
import FileService from '../../../../service/file.service'


import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateFormPets extends Component {

    constructor(props) {
        super(props)
        this.state = {
            petUpdated: {
                name: this.props.statePetCardClient.petInfo.name,
                species: this.props.statePetCardClient.petInfo.species,
                petPicPath: this.props.statePetCardClient.petInfo.petPicPath,
                breed: this.props.statePetCardClient.petInfo.breed,
                owner: this.props.statePetCardClient.petInfo.owner._id,
                vetHospital: !this.props.statePetCardClient.petInfo.vetHospital[0]._id ? " " : this.props.statePetCardClient.petInfo.vetHospital[0]._id
            },
            vetHospitals: null,

        }
        this.petService = new PetService()
        this.filesService = new FileService()
        this.hospitalsService = new VetHospitalProfielService()
    }

    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            petUpdated: { ...this.state.petUpdated, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.petService.editPet(this.props.propsPetCardClient._id, this.state.petUpdated)
            .then(() => this.props.finishUpdatePet())
            .catch(err => console.log(err))
    }

    handleFileUpload = e => {

        const uploadData = new FormData()
        uploadData.append("petPicPath", e.target.files[0])
        this.filesService.handleUpload(uploadData)
            .then(response => {
                this.setState({
                    petUpdated: { ...this.state.petUpdated, petPicPath: response.data.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    getVetHospitals = () => {
        this.hospitalsService.getOnlyVetHospital()
            .then(response => this.setState({ vetHospitals: response.data }))
            .catch(err => console.log(err))
    }


    displayHospitals = () => {
        this.state.vetHospitals && this.state.vetHospitals.map(hospital => {
            return (<option value={hospital._id}>{hospital.username}</option>)
        })
    }


    componentDidMount = () => {
        this.getVetHospitals()
    }



    render() {



        if (!this.state.vetHospitals) {
            return <h1>Cargando...</h1>
        } else {
            return (
                <Container>

                    <h1>Actualizar Mascota</h1>
                    <hr></hr>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" type="text" value={this.state.petUpdated.name} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="especie">
                            <Form.Label>Especie</Form.Label>
                            <Form.Control name="species" type="text" value={this.state.petUpdated.species} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="raza">
                            <Form.Label>Raza</Form.Label>
                            <Form.Control name="breed" type="text" value={this.state.petUpdated.breed} onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="select-hospital">
                            <Form.Label>Selecciona hospital</Form.Label>
                            <Form.Control as="select" name="vetHospital" value={this.state.petUpdated.vetHospital} onChange={this.handleInputChange} >
                                <option value={this.props.statePetCardClient.petInfo.vetHospital[0]._id}>{this.props.statePetCardClient.petInfo.vetHospital[0].username}</option>
                                {this.state.vetHospitals && this.state.vetHospitals.map(hospital => {
                                    return (<option key={hospital._id} value={hospital._id}>{hospital.username}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="img">
                            <Form.Label>Foto de tu mascota</Form.Label>
                            <Form.Control name="petPicPath" type="file" onChange={this.handleFileUpload} />
                        </Form.Group>
                        <Button variant="dark" type="submit">Actualizar mascota</Button>
                        <Button variant="dark" onClick={() => this.props.closeModal()}>Cerrar</Button>

                    </Form>

                </Container>
            )
        }
    }
}

export default UpdateFormPets
