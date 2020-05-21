import React, { Component } from 'react'


// import PetService from '../../../../service/pet.service'



// import CiteCard from '../../cites/citesCard/CiteCard'
// import QueryCard from '../../query/queryCard/QueryCard'
import PetForm from '../../pets/petsForm/PetForm'

import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Figure from 'react-bootstrap/Figure'
// import FigureImage from 'react-bootstrap/FigureImage'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal'

// import { Link } from 'react-router-dom'
import PetCardClient from '../../pets/petCardClient/PetCardClient'


class DashboardClient extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            userInfo: {
                id: this.props.loggedInUser._id,
                pets: this.props.loggedInUser.pets
            },
            toast: {
                show: false,
                text: ''
            },
            modalShow: false,

        }

    }

    handleModal = visible => this.setState({ modalShow: visible })
    handletoast = (visible, text = '') => {
        const toastCopy = { ...this.state.toast }
        toastCopy.show = visible
        toastCopy.text = text
        this.setState({ toast: toastCopy })
    }
    
    finishPetCreate = () => {
        this.handleModal(false)
        this.handletoast(true, 'Has creado una nueva mascota')
    }

    render() {


        return (
            <>

                <Container as="section" >

                <Button onClick={() => this.handleModal(true)} variant="dark">Crear nueva mascota</Button>

                
                {this.state.userInfo.pets && this.state.userInfo.pets.map(pet =>  <PetCardClient key={pet._id} {...pet} />)}

                </Container>

                <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <PetForm finishPetPost={this.finishPetCreate} ownerID={this.state.userInfo.id} closeModal={() => this.handleModal(false)} />
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