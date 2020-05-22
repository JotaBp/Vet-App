import React, { Component } from 'react'

import './ProfileClient.css'

import ProfileService from '../../../../service/profile.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'

import Card from 'react-bootstrap/Card'

class ProfileClient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profileInfo: {
                id: this.props.loggedInUser._id,
                username: '',
                surname: '',
                email: '',
                password: '',
                profilePicPath: '',
                address: '',
                phoneNumber: '',
                status: '',
                pets: [],
                queryClient: [],
                citeHospital: []
            },
            toast: {
                show: false,
                text: ''
            },
            modalShow: false,
            errorMessage: ''
        }
        this.profileService = new ProfileService()
    }

    getDetailsProfile = () => {
        this.profileService.getProfile(this.state.profileInfo.id)
            .then(response => this.setState({ profileInfo: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getDetailsProfile()
    }

    render() {

        return (

            <Container as="section" className="container-profile">
                <Row>
                    <Col as="article">
                        <h1>Perfil</h1>

                        <Figure className="img-profile">

                            <FigureImage

                                alt="Foto de perfil del usuario"
                                src={this.state.profileInfo.profilePicPath}
                            />

                        </Figure>
                    </Col>
                    <Col as="article">

                        <Card className="profile-card-client">
                            <Card.Header>Hola {this.state.profileInfo.username} este es tu perfil de usuario:</Card.Header>
                            <Card.Body>
                                <Card.Subtitle as="h5">Email de contacto:</Card.Subtitle>
                                <Card.Text as="p">{this.state.profileInfo.email}</Card.Text>
                                <Card.Subtitle as="h5">Domicilio:</Card.Subtitle>
                                <Card.Text as="p">{this.state.profileInfo.address}</Card.Text>
                                <Card.Subtitle as="h5">Telefono de contact:</Card.Subtitle>
                                <Card.Text as="p">{this.state.profileInfo.phoneNumber}</Card.Text>
                                <Card.Subtitle as="h5">Estado de la cuenta:</Card.Subtitle>
                                <Card.Text as="p">{this.state.profileInfo.status}</Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>

            </Container>


        )
    }
}

export default ProfileClient