import React, { Component } from 'react'
import './UpdateFormClient.css'

class UpdateFormClient extends Component {

    constructor(porps) {
        super(props)

        this.state= {

        }
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

export default UpdateFormClient