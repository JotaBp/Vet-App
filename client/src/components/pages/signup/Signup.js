import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'


class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            signUpInfo: {
                username: '',
                email: '',
                password: '',
                role: '' 
            },
            errorMessage: ''
        }
        this.authService = new AuthService()
    }


    handleInputChange = e => {

        let signUpInfoCopy = { ...this.state.signUpInfo }
        const { name, value } = e.target
        signUpInfoCopy = { ...signUpInfoCopy, [name]: value }

        this.setState({ signUpInfo: signUpInfoCopy })
    }



    handleSubmit = e => {
        e.preventDefault()
        this.authService.signup(this.state.signUpInfo)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
            })
            .catch(err => {
                err.response.status === 400 && this.setState({ errorMessage: err.response.data.message })
            })
    }



    render() {

        return (
            <Container>

                <Row>
                    <Col md={{ span: 4, offset: 4 }}>

                        <h3>Registro de usuario</h3>
                        <hr></hr>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Label>Que eres?</Form.Label>
                                <Form.Control as="select" name="role" value={this.state.role} onChange={this.handleInputChange}>
                                    <option defaultValue="GUEST">Invitado</option>
                                    <option value="VETHOSPITAL">Hospital Veterinario</option>
                                    <option value="CLIENT">Mascotero</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <p
                                className='error-message'
                                style={{ display: this.state.errorMessage ? 'block' : 'none' }}
                            >{this.state.errorMessage}</p>

                            <Button variant="dark" type="submit">Registrarme</Button>
                        </Form>

                        <p><small>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></small></p>

                    </Col>
                </Row>

            </Container>
        )
    }
}


export default Signup