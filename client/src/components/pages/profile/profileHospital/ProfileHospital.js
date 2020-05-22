import React, { Component } from 'react'

import './ProfileHospital.css'

import ProfileService from '../../../../service/profile.service'

import PetCard from '../../pets/petsList/PetCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal'

import { Link } from 'react-router-dom'

class HospitalProfile extends Component {


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
                chiefVetName: '',
                chiefVetSurname: '',
                collegiateNumber: '',
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

    // handleModal = visible => this.setState({ modalShow: visible })
    // handletoast = (visible, text = '') => {
    //     const toastCopy = { ...this.state.toast }
    //     toastCopy.show = visible
    //     toastCopy.text = text
    //     this.setState({ toast: toastCopy })
    // }


    getDetailsProfile = () => {
        this.profileService.getProfile(this.state.profileInfo.id)
            .then(response => this.setState({ profileInfo: response.data }))
            .catch(err => console.log(err))
    }


    componentDidMount = () => {
        this.getDetailsProfile()
    }



    render() {

        console.log(this.state.profileInfo)

        return (

            <>
                <Container>

                    <Row>
                        <Col>

                            <h1>Perfil de Hospital</h1>

                            <Figure>

                                <FigureImage
                                    // width={171}
                                    // height={180}
                                    alt="Foto de perfil del usuario"
                                    src={this.state.profileInfo.profilePicPath}
                                />

                            </Figure>
                        </Col><Col>
                            <h4>Nombre de usuario:</h4>
                            <p>{this.state.profileInfo.username}</p>

                            <h4>Email:</h4>
                            <p>{this.state.profileInfo.email}</p>
                            <h4>Direcion:</h4>
                            <p>{this.state.profileInfo.address}</p>
                            <h4>Numero de telefono:</h4>
                            <p>{this.state.profileInfo.phoneNumber}</p>
                            <h4>Estado de la cuenta:</h4>
                            <p>{this.state.profileInfo.status}</p>

                            {/* <Button>Actualizar</Button> */}
                        </Col>


                    </Row>

                </Container>

                <Container>
                    <Row>
                        {this.state.profileInfo.pets && this.state.profileInfo.pets.map(pet => <PetCard key={pet._id} {...pet} />)}
                    </Row>
                </Container>





                {/* <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <HospitalProfileForm closeModal={() => this.handleModal(false)} />
                    </Modal.Body>
                </Modal>

                <Toast onClose={() => this.handletoast(false)} show={this.state.toast.show} delay={3000} >
                    <Toast.Header>

                        <strong className="mr-auto">Mensaje</strong>
                    </Toast.Header>
                    <Toast.Body>{this.state.toast.text}</Toast.Body>
                </Toast> */}

            </>
        )
    }

}

export default HospitalProfile

