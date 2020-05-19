import React, { Component } from 'react'
import CiteService from '../../../../service/cite.service'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class CiteForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subject: '',
            description: '',
            date: '',
            vetHospital: '',
            pet: '',
            //Además hay que unirlo a un pet, de los qu tiene el hospital
            // entre sus clientes
            //tambien a la query si la cite es una respuesta a una consulta
        }
        this.citeService = new CiteService()
    }

    displayPets = e => {
        return this.props.pets.map( pet=> <option value={pet._id}>{pet.name}</option>)
    }


    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        let newCite = {...this.state}
        newCite.vetHospital = this.props.hospitalID
        this.citeService.createCite(newCite)
            .then(() => this.props.finishCitePost())
            .catch(err => console.log(err))
    }

    
    render() {
        return (
            <Container>

                <h1>Nueva Cita</h1>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="asunto">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control name="subject" type="text" value={this.state.subject} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="desc">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control name="description" type="text" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Dia de la cita</Form.Label>
                        <Form.Control name="date" type="date" value={this.state.date} onChange={this.handleInputChange} />
                    </Form.Group>
                    <select name="pet" onChange={this.handleInputChange}>
                        {this.displayPets()}
                    </select>
                    {/* <Form.Group controlId="img">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleInputChange} />
                    </Form.Group> */}
                    <Button variant="dark" onClick={() => this.props.closeModal()} style={{ marginRight: '10px' }}>Cerrar</Button>
                    <Button variant="dark" type="submit">Nueva cita</Button>
                </Form>
            </Container>
        )
    }
}

export default CiteForm