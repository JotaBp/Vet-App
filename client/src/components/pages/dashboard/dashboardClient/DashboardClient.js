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

    handleModal = visible => this.setState({ modalShow: visible })
    handletoast = (visible, text = '') => {
        const toastCopy = { ...this.state.toast }
        toastCopy.show = visible
        toastCopy.text = text
        this.setState({ toast: toastCopy })
    }

    getPetsFromClient = () => {
        this.petService.getPetsFromClient(this.state.userInfo.id)
            .then(response => { console.log(response.data)
                return this.setState({ userInfo: { pets: response.data }})})
            .catch(err => console.log(err))
    }
    
    finishPetCreate = () => {
        this.getPetsFromClient()
        this.handleModal(false)
        this.handletoast(true, 'Has creado una nueva mascota')
    }

    componentDidMount = () => {
        this.getPetsFromClient()
    }


    render() {

        console.log(this.state.userInfo.pets)


        return (
            <>

                <Container as="section"  className="content-dashboard">

                <Button onClick={() => this.handleModal(true)} variant="dark">Crear nueva mascota</Button>

                
                {this.state.userInfo.pets && this.state.userInfo.pets.map(pet =>  <PetCardClient key={pet._id} {...pet} />)}

                </Container>

                <Modal className="modal-window" show={this.state.modalShow} onHide={() => this.handleModal(false)}>
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

export default DashboardClient