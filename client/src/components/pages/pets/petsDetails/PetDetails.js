import React, { Component } from 'react'

import CiteCard from './../../cites/CiteCard'
import QueryCard from './../../query/QueryCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'



class PetDetails extends Component {
    render() {
        return (


            <Container>
                <Button variant="dark"><Link to="">Editar</Link></Button>
                <Button variant="danger"><Link to="">Borrar</Link></Button>

                <Row>
                    <Col>

                        <Figure>

                            <FigureImage

                                alt="Foto de la mascota"
                                src=""
                            />

                        </Figure>


                    </Col>

                    <Col>
                        <h4>Nombre</h4>
                        <p></p>
                        <h5>Especie</h5>
                        <p></p>
                        <h5>Raza</h5>
                        <p></p>
                        <h5>Propietario</h5>
                        <Card >
                            <Card.Img variant="top" src="prop del propietario" />
                            <Card.Body>
                                <Card.Title>Nombre del propietario</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>email</ListGroupItem>
                                <ListGroupItem>Direccion</ListGroupItem>
                                <ListGroupItem>Telefono</ListGroupItem>
                            </ListGroup>

                            {/* Se podrian poner un boton que lleve a los detalles del hospital o del propietario,
                            este renderizado seria condicional, segun si el usuario que entra tiene le role de 
                            cliente o de hospital */}
                            
                        </Card>
                        <h5>Hospital</h5>
                        <Card >
                            <Card.Img variant="top" src="prop del Hospital" />
                            <Card.Body>
                                <Card.Title>Nombre del hospital</Card.Title>

                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>email</ListGroupItem>
                                <ListGroupItem>Direccion</ListGroupItem>
                                <ListGroupItem>telefono</ListGroupItem>
                            </ListGroup>
                        </Card>
                        <h5>Consultas</h5>

                        {this.state.query && this.state.query.map(query => <QueryCard key={query._id} {...query} />)}                       

                        <h5>Citas</h5>

                        {this.state.cites && this.state.cites.map(cite => <CiteCard key={cite._id} {...cite} />)}                       


                    </Col>
                </Row>
            </Container>

        )
    }
}

export default PetDetails


