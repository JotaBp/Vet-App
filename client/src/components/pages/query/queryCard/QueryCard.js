import React, { Component } from 'react'
import './QueryCard.css'

import CiteService from '../../../../service/cite.service'


import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'

import { Link } from 'react-router-dom'
import CiteResponseForm from '../../cites/citeResposeForm/CiteResponseForm'

class QueryCard extends Component {

  constructor(props) {
    super(props)
    this.state = {

      toast: {
        show: false,
        text: ''
      },
      modalShow: false
    }
    this.citeService = new CiteService()

  }

  handleModal = visible => this.setState({ modalShow: visible })

  finishCiteResponsePost = () => {
        this.handleModal(false)
    }


  render() {
    console.log(this.props)
    return (
      <>
        <Card>
          <Card.Header as="h5">Consulta: {this.props.status}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.subject}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.props.date}</Card.Subtitle>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Subtitle>Respuestas</Card.Subtitle>
            <Button onClick={() => this.handleModal(true)} variant="dark" >Responder</Button>
          </Card.Body>
        </Card>

        <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
          <Modal.Body>
            <CiteResponseForm finishCiteResponsePost={this.finishCiteResponsePost} hospitalObj={this.props.vetHospital} petObj={this.props.pet} queryObj={this.props} closeModal={() => this.handleModal(false)} />
          </Modal.Body>
        </Modal>

      </>
    )
  }
}

export default QueryCard