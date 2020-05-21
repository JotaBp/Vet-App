import React, { Component } from 'react'

import VetHospitalProfielService from '../../../../service/profile.service'
import PetService from '../../../../service/pet.service'
import FileService from '../../../../service/file.service'


import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class PetForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            petCreated: {
                name: '',
                species: '',
                // petPicPath: '',
                breed: '',
                owner: this.props.ownerID,
                vetHospital: ''
            },
            vetHospitals: null,

        }
        this.petService = new PetService()
        this.filesService = new FileService()
        this.hospitalsService = new VetHospitalProfielService()
    }

    getVetHospitals = () => {
        this.hospitalsService.getOnlyVetHospital()
            .then(response => {
                return this.setState({ vetHospitals: response.data })})
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.getVetHospitals()
    }

    displayHospitals = () => {
         this.state.vetHospitals && this.state.vetHospitals.map( hospital => {
            console.log(hospital)

             
            return (<option value={hospital._id}>{hospital.username}</option>)})
    }

    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
           petCreated: { ...this.state.petCreated, [name]: value }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.petService.petCreate(this.state.petCreated)
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
                    ...this.state.petCreated,  petCreated: { petPicPath: response.data.secure_url} // Cuidado con el petpicpath que va a petar por aqui
                })
            })
            .catch(err => console.log(err))
    }

    getVetHospitals = () => {
        this.hospitalsService.getOnlyVetHospital()
            .then(response => {
                return this.setState({ vetHospitals: response.data })})
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        !this.state.vetHospitals && this.getVetHospitals() //esto es para que lo haga solo una vez, si no entra en bucle infinito por el setState de la función
    }

    displayHospitals = () => {
         return this.state.vetHospitals && this.state.vetHospitals.map( hospital => {
            console.log(hospital)

             
            return (<option value={hospital._id}>{hospital.username}</option>)})
    }

    render() {
        if(!this.state.vetHospitals){
            return <h1>Cargando...</h1>
        }else{
        return (
            <Container>

                <h1>Nueva Mascota</h1>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="name" type="text" value={this.state.petCreated.name} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="especie">
                        <Form.Label>Especie</Form.Label>
                        <Form.Control name="species" type="text" value={this.state.petCreated.species} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="raza">
                        <Form.Label>Raza</Form.Label>
                        <Form.Control name="breed" type="text" value={this.state.petCreated.breed} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="select-hospital">
                        <Form.Label>Selecciona hospital</Form.Label>
                        <Form.Control as="select" name="vetHospital" value={this.state.petCreated.vetHospital} onChange={this.handleInputChange} >
                            <option>Seleccionar</option>
                            {this.displayHospitals()}
                        </Form.Control>
                    </Form.Group>

                    {/* <Form.Group controlId="img">
                        <Form.Label>Foto de tu mascota</Form.Label>
                        <Form.Control name="petPicPath" type="file" value={this.state.petCreated.petPicPath} onChange={this.handleFileUpload} />
                    </Form.Group> */}

                    <Button variant="dark" onClick={() => this.props.closeModal()}>Cerrar</Button>
                    <Button variant="dark" type="submit">Nueva mascota</Button>
                </Form>
            </Container>
        )
    }

}
}

export default PetForm