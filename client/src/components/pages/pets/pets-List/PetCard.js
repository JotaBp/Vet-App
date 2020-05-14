import React from 'react'


import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const PetCard = props => {
    return (
               
        <Col lg={3} md={6}>
            <Card as="article">
                <Card.Img variant="top" src={props.petPicPath} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
        
    )
}

export default PetCard