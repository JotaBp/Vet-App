import React, { Component } from 'react'
import ProfileService from '../../../../service/profile.service'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

class HospitalProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            upDateProfileInfo: {
                username: '',
                surname: '',
                email: '',
                password: '',
                address: '',
                phoneNumber: '',
                chiefVetName: '',
                chiefVetSurname: '',
                collegiateNumber: ''
            },
            errorMessage: ''
        }
        this.profileService = new ProfileService()
    }

    getDetailsToUpdateProfile = () => {
        this.profileService.getDetailsToUpdateProfile()
            .then(response => this.setState({ upDateProfileInfo: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.getDetailsToUpdateProfile()
    }

    handleInputChange = e => {

        let upDateProfileInfoCopy = { ...this.state.upDateProfileInfo }
        const { name, value } = e.target
        upDateProfileInfoCopy = { ...upDateProfileInfoCopy, [name]: value }

        this.setState({ upDateProfileInfo: upDateProfileInfoCopy })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.profileService.updateProfile(this.state.signUpInfo)
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
                    <Col md={{ span: 6, offset: 4 }}>

                        <h3>Actualizar profile</h3>
                        <hr></hr>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="lastname">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control name="surname" type="text" value={this.state.surname} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="mail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="address">
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control name="address" type="text" value={this.state.address} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="phoneNumber">
                                <Form.Label>Numero de telefono</Form.Label>
                                <Form.Control name="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="chiefVetName">
                                <Form.Label>Nombre del jefe veterinario</Form.Label>
                                <Form.Control name="chiefVetName" type="text" value={this.state.chiefVetName} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="chiefVetSurname">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control name="chiefVetSurname" type="text" value={this.state.chiefVetSurname} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="collegiateNumber">
                                <Form.Label>Numero de colegiado</Form.Label>
                                <Form.Control name="collegiateNumber" type="text" value={this.state.collegiateNumber} onChange={this.handleInputChange} />
                            </Form.Group>

                            {/* <p
                                className='error-message'
                                style={{ display: this.state.errorMessage ? 'block' : 'none' }}
                            >{this.state.errorMessage}</p> */}

                            <Button variant="dark" type="submit">Actualizar</Button>
                        </Form>

                        <p><small>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></small></p>

                    </Col>
                </Row>

            </Container>
        )
    }
}

export default HospitalProfile