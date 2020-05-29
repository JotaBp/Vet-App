import React, { Component } from 'react'

import './DashboardCliente.css'

import PetForm from '../../pets/petsForm/PetForm'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal'

import PetCardClient from '../../pets/petCardClient/PetCardClient'

import PetService from '../../../../service/pet.service'


class DashboardClient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                id: this.props.loggedInUser._id,
                pets: []
            },
            toast: {
                show: false,
                text: ''
            },
            modalShow: false,

        }

        this.petService = new PetService()


    }

    handleModal = visible => {
        console.log(`esto es el handlemodal ${visible}`)
        this.setState({ modalShow: visible })
    }

    handletoast = (visible, text = '') => {
        const toastCopy = { ...this.state.toast }
        toastCopy.show = visible
        toastCopy.text = text
        this.setState({ toast: toastCopy })
    }

    getPetsFromClient = (idClient) => {
        this.petService.getPetsFromClient(idClient)
            .then(response => {
                console.log("esto es el acceso al servicio")
                return this.setState({ userInfo: { ...this.state.userInfo, pets: response.data } })
            })
            .catch(err => console.log(err))
    }

    finishPetCreate = () => {
        this.getPetsFromClient(this.props.loggedInUser._id)
        this.handleModal(false)
        this.handletoast(true, 'Has creado una nueva mascota')
    }

    componentDidMount = () => {
        this.getPetsFromClient(this.props.loggedInUser._id)
    }


    render() {

        return (
            <>

                <Container as="section" className="content-dashboard">

                    <Button onClick={() => this.handleModal(true)} variant="dark">Crear nueva mascota</Button>

                    <Toast onClose={() => this.handletoast(false)} show={this.state.toast.show} delay={3000} >
                        <Toast.Header>

                            <strong className="mr-auto">Mensaje</strong>
                        </Toast.Header>
                        <Toast.Body>{this.state.toast.text}</Toast.Body>
                    </Toast>


                    {this.state.userInfo.pets && this.state.userInfo.pets.map((pet, idx) =>{

                        return (<PetCardClient
                            index= {idx}
                            key={pet._id} {...pet}

                        />)
                        })}

                </Container>

                <Modal className="modal-window" show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <PetForm finishPetPost={this.finishPetCreate} ownerID={this.props.loggedInUser._id} closeModal={() => this.handleModal(false)} />
                    </Modal.Body>
                </Modal>





            </>

        )
    }
}

export default DashboardClient