import React from 'react'

import './PetCard.css'

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const PetCard = props => {
    return (

        <Col xs={12} md={6} lg={4} as="article">
            <Card >
                <Card.Img variant="top" src={props.petPicPath} />
                <Card.Header>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="text-pet-card">{props.breed}</Card.Text>
                </Card.Body>

                <ListGroup>
                    <ListGroup.Item variant="dark">{props.species}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>

    )
}

export default PetCard