import React, { Component } from 'react'
import './HomePage.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class HospitalGlobal extends Component {
    render() {
        return (
            <>
                <Container as="section">

                    <Row>
                        <Col>

                            <Button>Crear nueva cita</Button>
                            <p> saldra una ventana modal</p>

                        </Col>
                        <Col>

                        <Button>Ver los pacientes del hospital</Button>

                        </Col>
                    </Row>

                </Container>

                <Container as="section">

                </Container>

                <Container as="section">

                </Container>
            </>

        )
    }
}

export default HospitalGlobal