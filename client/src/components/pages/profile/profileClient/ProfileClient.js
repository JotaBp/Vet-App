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

    handleModal = visible => this.setState({ modalShow: visible })
    handletoast = (visible, text = '') => {
        const toastCopy = { ...this.state.toast }
        toastCopy.show = visible
        toastCopy.text = text
        this.setState({ toast: toastCopy })
    }

    getDetailsProfile = () => {
        this.profileService.getProfile(this.props.loggedInUser._id)
            .then(response => this.setState({ profileInfo: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.getDetailsProfile()
    }

    finishPetCreate = () => {
        this.getDetailsProfile()
        this.handleModal(false)
        this.handletoast(true, 'Has creado una nueva mascota')
    }



    render() {

        return (

            <>
                <Container>

                    <Row>
                        <Col>

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

                        </Col>

                        <Col md={{ span: 6}}>

                            <Button onClick={() => this.handleModal(true)} variant="dark">Crear nueva mascota</Button>

                            {this.state.profileInfo.pets && this.state.profileInfo.pets.map(pet => <PetCard key={pet._id} {...pet} />)}




                        </Col>
                    </Row>

                </Container>

                <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <PetForm finishPetPost={this.finishPetCreate} ownerID={this.props.loggedInUser._id} closeModal={() => this.handleModal(false)} />
                    </Modal.Body>
                </Modal>

                <Toast onClose={() => this.handletoast(false)} show={this.state.toast.show} delay={3000} >
                    <Toast.Header>

                        <strong className="mr-auto">Mensaje</strong>
                    </Toast.Header>
                    <Toast.Body>{this.state.toast.text}</Toast.Body>
                </Toast>

            </>
        )
    }
}

export default ProfileClient