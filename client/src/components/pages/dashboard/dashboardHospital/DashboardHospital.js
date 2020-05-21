import React, { Component } from 'react'

import CiteService from '../../../../service/cite.service'
import QueryService from '../../../../service/query.service'


import CiteCard from '../../cites/citesCard/CiteCard'
import QueryCard from '../../query/queryCard/QueryCard'
import CiteForm from '../../cites/citesForm/CiteForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal'

import { Link } from 'react-router-dom'


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


    // 1. Formulario creación de query en el Dashboard Cliente
    // 2. Ruta del back que crea la query y en el then la vincula al user y al hospital (Revisar lo hecho en el cite.routes)
    // 3. Preparar formulario respuesta del hospital
    // 4. Ruta del back respuesta del hospital que hace un findByIdAndUpdate y actualiza el campo de answer
    // 5. En este punto, el usuario y el hospital deben ver la respuesta (preparar el campo en front con render condicional tipo if query.answer && <p>{answer}</p>)

    

    render() {

        // console.log(this.props.loggedInUser._id)
        // console.log(this.state.cites)
        // console.log(this.state.querys)

        return (
            <>
                <Container as="section" >
                    <Row>
                        <Col>
                            {/* utilizar con estos botones un renderizado condicional
                         segun el role del usuario */}
                         <Button onClick={() => this.handleModal(true)} variant="dark" style={{ marginBottom: '20px' }}>Crear nueva cita</Button>

                        </Col>
                        <Col>
                            <Button></Button>

                        </Col>
                        <Col>
                            <Button></Button>
                        </Col>

                    </Row>
                </Container>

                <Container as="section" >

                <h1>Citas</h1>


                    {this.state.cites && this.state.cites.map(cite =>  <CiteCard key={cite._id} {...cite} />)}


                </Container>

                <Container as="section" >

                <h1>Consultas</h1>


                    {this.state.querys && this.state.querys.map(query => <QueryCard key={query._id} {...query} />)}


                </Container>

                <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <CiteForm finishCitePost={this.finishCiteCreate} hospitalID={this.props.loggedInUser._id} pets={this.props.loggedInUser.pets} closeModal={() => this.handleModal(false)} />
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

export default DashboardHospital