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

      queryInfo: {
        status: this.props.status,
        subject: this.props.subject,
        date: this.props.date,
        description: this.props.description,
        vetHospitalObj: this.props.vetHospital,
        petObj: this.props.pet,
      },

      citeHospitalResponse: {
        description: this.props.citeHospital.description
      },

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
        <Card as="article">
          <Card.Header as="h5">Consulta: {this.state.queryInfo.status}</Card.Header>
          <Card.Body>
            <Card.Title>{this.state.queryInfo.subject}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.state.queryInfo.date}</Card.Subtitle>
            <Card.Text as="p">
              {this.state.queryInfo.description}
            </Card.Text>
            <Card style={{ display: this.state.citeHospitalResponse.description ? 'block' : 'none' }}>
              <Card.Title>Respuesta</Card.Title>
              <Card.Text as="p">{this.state.citeHospitalResponse.description}</Card.Text>
            </Card>
            <Button onClick={() => this.handleModal(true)} variant="dark" >Responder</Button>
          </Card.Body>
        </Card>

        <Modal show={this.state.modalShow} onHide={() => this.handleModal(false)}>
          <Modal.Body>
            <CiteResponseForm finishCiteResponsePost={this.finishCiteResponsePost} hospitalObj={this.state.queryInfo.vetHospitalObj} petObj={this.state.queryInfo.petObj} queryObj={this.props} closeModal={() => this.handleModal(false)} />
          </Modal.Body>
        </Modal>

      </>
    )
  }
}

export default QueryCard