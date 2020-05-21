import React, { Component } from 'react'
import CiteService from '../../../../service/cite.service'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class CiteResponseForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subject: this.props.queryObj.subject,
            description: '',
            queryClient: this.props.queryObj._id,
            vetHospital: this.props.hospitalObj._id,
            pet: this.props.petObj._id
        }
        this.citeService = new CiteService()
    }



    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.citeService.createCiteResponse(this.state)
            .then(() => this.props.finishCiteResponsePost())
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.props.queryObj.subject)
        return (
            <Container>

                <h1>Responder a la consulta</h1>
                <hr></hr>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="desc">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control as="textarea" rows="3" name="description"  value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    
                    <Button variant="dark" onClick={() => this.props.closeModal()} style={{ marginRight: '10px' }}>Cerrar</Button>
                    <Button variant="dark" type="submit">Enviar</Button>
                </Form>
            </Container>
        )
    }
}

export default CiteResponseForm