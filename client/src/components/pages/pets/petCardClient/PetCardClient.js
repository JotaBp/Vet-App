import React, { Component } from 'react'

import CiteService from '../../../../service/cite.service'
import QueryService from '../../../../service/query.service'

import QueryForm from '../../query/queryForm/QueryForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Toast from 'react-bootstrap/Toast'




import { Link } from 'react-router-dom'



class PetCardClient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            petInfo: {
                cites: "",
                querys: "",
                vetHospital: ""
            },
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

    getQuerysInfo = () => {
        this.queryService.queryFromPet(this.props._id)
            .then(response => this.setState({ querys: response.data }))
            .catch(err => console.log(err))
    }

    getCitesInfo = () => {
        this.citeService.citesFromPet(this.props._id)
            .then(response => this.setState({ cites: response.data }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getQuerysInfo()
        this.getCitesInfo()
    }

    finishQueryPost = () => {
        this.getQuerysInfo()
        this.handleModal(false)
        this.handletoast(true, 'Consulta creada en BBDD')
    }



    render() {
        console.log(this.props)

        return (
            <>
                <Container as="section">



                    <Row>
                        <Col as="article">
                            <Card>
                                <Card.Img variant="top" src={this.props.petPicPath} />

                                <Card.Header as="h5">{this.props.name}</Card.Header>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{this.props.species}</ListGroup.Item>
                                    <ListGroup.Item>{this.props.breed}</ListGroup.Item>
                                </ListGroup>

                                <h4>Consultas</h4>

                                {this.state.querys && this.state.querys.map(query => {

                                    return (<Card.Body key={query._id}>
                                        <Card.Title>{query.subject}</Card.Title>
                                        <Card.Subtitle>{query.date}</Card.Subtitle>
                                        <Card.Subtitle >{query.description}</Card.Subtitle>
                                    </Card.Body>)
                                })}
                                
                                <h4>Citas</h4>

                                {this.state.cites && this.state.cites.map(cite => {

                                    return (<Card.Body key={cite._id}>
                                        <Card.Title>{cite.subject}</Card.Title>
                                        <Card.Subtitle>{cite.date}</Card.Subtitle>
                                        <Card.Subtitle >{cite.description}</Card.Subtitle>
                                    </Card.Body>)
                                })}




                                <Card.Footer>
                                    <Button onClick={() => this.handleModal(true)} variant="dark" style={{ marginBottom: '20px' }}>Crear Consulta para {this.props.name}</Button>

                                </Card.Footer>
                            </Card>

                        </Col>

                    </Row>

                </Container>

                <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <QueryForm finishQueryCreate={this.finishQueryPost} petId={this.props._id} hospitalArr={this.props.vetHospital} closeModal={() => this.handleModal(false)} />
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

export default PetCardClient



