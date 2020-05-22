import React, { Component } from 'react'

import './ProfileClient.css'

import ProfileService from '../../../../service/profile.service'

import PetCard from '../../pets/petsList/PetCard'
import PetForm from '../../pets/petsForm/PetForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal'


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

                        <h4>Nombre de usuario:</h4>

                        <p>{this.state.profileInfo.username}</p>
                        <h4>Email de contacto:</h4>
                        <p>{this.state.profileInfo.email}</p>
                        <h4>Domicilio:</h4>
                        <p>{this.state.profileInfo.address}</p>
                        <h4>Telefono de contact:</h4>
                        <p>{this.state.profileInfo.emaphoneNumberil}</p>
                        <h4>Estado de la cuenta:</h4>
                        <p>{this.state.profileInfo.status}</p>

                        {/* <Button>Actualizar</Button> */}
                    </Col>
                </Row>

            </Container>


        )
    }
}

export default ProfileClient