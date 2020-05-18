import React, { Component } from 'react'
import ProfileService from '../../../../service/profile.service'

import PetCard from './../../pets/pets-List/PetCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'

import { Link } from 'react-router-dom'

class ProfileClient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profileInfo: {
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
            errorMessage: ''
        }
        this.profileService = new ProfileService()
    }

    getDetailsProfile = () => {
        this.profileService.getProfile(this.props.loggedInUser._id)
            .then(response => this.setState({ profileInfo: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.getDetailsProfile()
    }



    render() {

        console.log(this.state.profileInfo)
        return (
            <Container>

                <Row>
                    <Col>

                        <h1>Perfil</h1>

                        <Figure>

                            <FigureImage
                                // width={171}
                                // height={180}
                                alt="Foto de perfil del usuario"
                                src= {this.state.profileInfo.profilePicPath}
                            />

                        </Figure>

                        <h3>{this.state.profileInfo.username}</h3>

                        <h3>{this.state.profileInfo.email}</h3>
                        <h3>{this.state.profileInfo.address}</h3>
                        <h3>{this.state.profileInfo.emaphoneNumberil}</h3>
                        <h3>{this.state.profileInfo.status}</h3>

                        <Button>Actualizar</Button>

                    </Col>

                    <Col>

                    <Button>Crear Mascota</Button>

                    {this.state.profileInfo.pets && this.state.profileInfo.pets.map(pet => <PetCard key={pet._id} {...pet} />)}




                    </Col>
                </Row>

            </Container>
        )
    }
}

export default ProfileClient