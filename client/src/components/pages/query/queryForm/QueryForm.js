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
            //Además hay que unirlo a un pet, de los qu tiene el propietario que la ha creado
            //tambien a la cita si la query es respondida por el hospital al que se envia
        }
        this.queryService = new QueryService()
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
            .then(() => this.props.finishQueryPost())
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
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control name="date" type="date" value={this.state.date} onChange={this.handleInputChange} />
                    </Form.Group>
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

export default QueryForm