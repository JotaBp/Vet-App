import React, { Component } from 'react'

import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AuthService from '../../../service/auth.service'

import { Link } from 'react-router-dom'



class Navigation extends Component {

    constructor(props) {
        super(props)
        this.authService = new AuthService()
    }

    logout = () => {
        this.props.setTheUser(false)
        this.authService.logout()
    }

    render() {

        return (
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand as="div" className="logo">
                    <Link to="/">
                        <img src="images/icono_veterinario.png" alt="logo Vet-App" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as="div"><Link to="/" as="a">Inicio</Link></Nav.Link>

                        {
                            !this.props.loggedInUser ?
                                <>
                                    <Nav.Link as="div"><Link to="/login" as="a">Iniciar sesión</Link></Nav.Link>
                                    <Nav.Link as="div"><Link to="/signup" as="a">Registro</Link></Nav.Link>
                                </>

                                :
                                <>
                                    <Nav.Link as="div"><Link to="/global" as="a">Posicion global</Link></Nav.Link>
                                    <Nav.Link as="div"><Link to="/profile" as="a">Perfil</Link></Nav.Link>
                                    <Nav.Link as="div" onClick={this.logout} >Cerrar sesión</Nav.Link>
                                </>

                        }

                    </Nav>
                    <Navbar.Text className="ml-auto" as="div"> Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitad@'}</Navbar.Text>
                </Navbar.Collapse>

            </Navbar>
        )
    }

}

export default Navigation