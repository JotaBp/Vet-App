import React, { Component } from 'react'

import './PetCardClient.css'

import CiteService from '../../../../service/cite.service'
import QueryService from '../../../../service/query.service'
import PetService from '../../../../service/pet.service'


import QueryForm from '../../query/queryForm/QueryForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from 'react-bootstrap/Modal'
import Toast from 'react-bootstrap/Toast'


class PetCardClient extends Component {

    constructor(props) {
        super(props)
        this.state = {

            petInfo: {
                id: this.props._id,
                petPicPath: this.props.petPicPath,
                name: this.props.name,
                species: this.props.species,
                breed: this.props.breed,
                vetHospital: this.props.vetHospital,

            },
            cites: "",
            querys: "",


            toast: {
                show: false,
                text: ''
            },
            modalShow: false
        }
        this.citeService = new CiteService()
        this.queryService = new QueryService()
        this.petService = new PetService()

    }

    handleModal = visible => this.setState({ modalShow: visible })
    handletoast = (visible, text = '') => {
        const toastCopy = { ...this.state.toast }
        toastCopy.show = visible
        toastCopy.text = text
        this.setState({ toast: toastCopy })
    }

    getQuerysInfo = () => {
        this.queryService.queryFromPet(this.props._id)
            .then(response => {
                return this.setState({ querys: response.data })
            })
            .catch(err => console.log(err))
    }

    getCitesInfo = () => {
        this.citeService.citesFromPet(this.props._id)
            .then(response => this.setState({ cites: response.data }))
            .catch(err => console.log(err))
    }

    handleDelete = (petId) => {
        this.petService.deletePet(petId)
            .catch(err => console.log(err))
    }

    finishQueryPost = () => {
        this.getQuerysInfo()
        this.handleModal(false)
        this.handletoast(true, 'Consulta enviada al Hospital')
    }

    componentDidMount = () => {
        this.getQuerysInfo()
        this.getCitesInfo()
    }

    //Falla el delete y el create, se crean y se eliminan los registros, pero no se actuliza la pagina en el momento en el que se produce la accion


    render() {

        return (
            <>
                <Container as="section">


                    <Row>
                        <Col as="article">
                            <Card className="card">
                                <Card.Img variant="top" src={this.state.petInfo.petPicPath} />

                                <Card.Header as="h5">{this.state.petInfo.name}</Card.Header>
                                <Button className="delete-button" onClick={() => this.handleDelete(this.state.petInfo.id)} variant="danger" size="md">Eliminar mascota</Button>

                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{this.state.petInfo.species}</ListGroup.Item>
                                    <ListGroup.Item>{this.state.petInfo.breed}</ListGroup.Item>
                                </ListGroup>

                                <h4 className="query" >Consultas</h4>

                                {this.state.querys && this.state.querys.map(query => {


                                    return (

                                        <Card.Body className="body" key={query._id}>
                                            <Card.Title>{query.subject}</Card.Title>
                                            <Card.Subtitle>{query.date}</Card.Subtitle>
                                            <Card.Text as="p" className="card-text">{query.description}</Card.Text>
                                            {query.citeHospital && <Card style={{ display: query.citeHospital.description ? 'block' : 'none' }}>

                                                <Card.Title as="h5" className="card-title-response">Respuesta</Card.Title>
                                                <Card.Text as="p" className="card-text-response">{query.citeHospital.description}</Card.Text>

                                            </Card>}
                                        </Card.Body>
                                    )
                                })}

                                <h4 className="cite">Citas</h4>

                                {this.state.cites && this.state.cites.map(cite => {


                                    return (
                                        <Card.Body className="body" key={cite._id}>
                                            <Card.Title>{cite.subject}</Card.Title>
                                            <Card.Subtitle>{cite.date}</Card.Subtitle>
                                            <Card.Text as="p" className="card-text">{cite.description}</Card.Text>
                                        </Card.Body>
                                    )
                                })}


                                <Card.Footer>
                                    <Button onClick={() => this.handleModal(true)} variant="dark" >Crear Consulta para {this.state.petInfo.name}</Button>

                                </Card.Footer>
                            </Card>

                        </Col>

                    </Row>

                </Container>

                <Modal className="modal-window" show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <QueryForm finishQueryCreate={this.finishQueryPost} petId={this.state.petInfo.id} hospitalArr={this.props.vetHospital} closeModal={() => this.handleModal(false)} />
                    </Modal.Body>
                </Modal>

                <Toast className="toast-window" onClose={() => this.handletoast(false)} show={this.state.toast.show} delay={3000} >
                    <Toast.Header>
                        <strong className="mr-auto">Mensaje</strong>
                    </Toast.Header>
                    <Toast.Body>{this.state.toast.text}</Toast.Body>
                </Toast>

            </>
        )
    }
}

export default PetCardClient



