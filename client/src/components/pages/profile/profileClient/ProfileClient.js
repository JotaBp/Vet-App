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

                <Container>


                            <h1>Perfil</h1>

                            <Figure>

                                <FigureImage

                                    alt="Foto de perfil del usuario"
                                    src={this.state.profileInfo.profilePicPath}
                                />

                            </Figure>

                            <h3>{this.state.profileInfo.username}</h3>

                            <h3>{this.state.profileInfo.email}</h3>
                            <h3>{this.state.profileInfo.address}</h3>
                            <h3>{this.state.profileInfo.emaphoneNumberil}</h3>
                            <h3>{this.state.profileInfo.status}</h3>

                            <Button>Actualizar</Button>



                </Container>


        )
    }
}

export default ProfileClient