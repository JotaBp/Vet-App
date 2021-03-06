import React, { Component } from 'react'

import QueryService from '../../../../service/query.service'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class QueryForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subject: '',
            description: '',
            date: '',
            pet: this.props.petId,
            vetHospital: '',

        }
        this.queryService = new QueryService()
    }

    displayHospitals = () => {
        return this.props.hospitalArr.map(hospital => {
            return (<option key={hospital._id} value={hospital._id}>{hospital.username}</option>)
        })
    }

    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        this.queryService.queryCreate(this.state)
            .then(() => this.props.finishQueryCreate())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>

                <h1>Nueva Consulta</h1>
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
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control name="date" type="date" value={this.state.date} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="select-hospital">
                        <Form.Label>Selecciona hospital</Form.Label>
                        <Form.Control as="select" name="vetHospital" value={this.state.vetHospital} onChange={this.handleInputChange} >
                            <option>Seleccionar</option>
                            {this.displayHospitals()}
                        </Form.Control>
                    </Form.Group>

                    <Button variant="dark" onClick={() => this.props.closeModal()} style={{ marginRight: '10px' }}>Cerrar</Button>
                    <Button variant="dark" type="submit">Nueva consulta</Button>
                </Form>
            </Container>
        )
    }
}

export default QueryForm