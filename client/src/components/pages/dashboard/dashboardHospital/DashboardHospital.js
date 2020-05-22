import React, { Component } from 'react'

import CiteService from '../../../../service/cite.service'
import QueryService from '../../../../service/query.service'

import './DashboardHospital.css'

import CiteCard from '../../cites/citesCard/CiteCard'
import QueryCard from '../../query/queryCard/QueryCard'
import CiteForm from '../../cites/citesForm/CiteForm'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal'



class DashboardHospital extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            userInfo: {
                id: this.props.loggedInUser._id
            },
                querys: "",
                cites: "",
            
            toast: {
                show: false,
                text: ''
            },
            modalShow: false

        }
        this.citeService = new CiteService()
        this.queryService = new QueryService()
    }
    
    handleModal = visible => this.setState({ modalShow: visible })
    handletoast = (visible, text = '') => {
        const toastCopy = { ...this.state.toast }
        toastCopy.show = visible
        toastCopy.text = text
        this.setState({ toast: toastCopy })
    }
    
    getCitesInfo = () => {
        this.citeService.citeFromHospital(this.state.userInfo.id)
        .then(response => this.setState({ cites: response.data }))
        .catch(err => console.log(err))
    }

    getQueryInfo = () => {
        this.queryService.queryFromHospital(this.state.userInfo.id)
        .then(response => this.setState({ querys: response.data }))
        .catch(err => console.log(err))
    }
    
    
    componentDidMount = () => {
        this.getCitesInfo()
        this.getQueryInfo()
    }

    finishCiteCreate = () => {
        this.getCitesInfo()
        this.handleModal(false)
        this.handletoast(true, 'Cita creada en BBDD')
    }

    

    render() {



        return (
            <Container className="content-dashboard">
                <Container as="section" >

                         <Button onClick={() => this.handleModal(true)} variant="dark" >Crear nueva cita</Button>


                </Container>

                <Container as="section" >

                <h1>Citas</h1>


                    {this.state.cites && this.state.cites.map(cite =>  <CiteCard key={cite._id} {...cite} />)}


                </Container>

                <Container as="section" >

                <h1>Consultas</h1>


                    {this.state.querys && this.state.querys.map(query => <QueryCard key={query._id} {...query} />)}


                </Container>

                <Modal className="modal-window" show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body >
                        <CiteForm  finishCitePost={this.finishCiteCreate} hospitalID={this.props.loggedInUser._id} pets={this.props.loggedInUser.pets} closeModal={() => this.handleModal(false)} />
                    </Modal.Body>
                </Modal>

                <Toast className="tostada" onClose={() => this.handletoast(false)} show={this.state.toast.show} delay={3000} >
                    <Toast.Header>
                        <strong className="mr-auto">Mensaje</strong>
                    </Toast.Header>
                    <Toast.Body>{this.state.toast.text}</Toast.Body>
                </Toast>
            </Container>

        )
    }
}

export default DashboardHospital