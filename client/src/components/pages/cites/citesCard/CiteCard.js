import React from 'react'
import './CitesCard.css'


import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

const CitesCard = (props) => {
  return (
    <Card as="article">
      <Card.Header as="h5">Cita</Card.Header>
      <Card.Body>
        <Card.Title>{props.subject}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
        <Card.Text as="p" className="text-description">
          {props.description}
        </Card.Text>
        {/* <Button variant="dark"><Link to="">Detalles</Link></Button> */}
      </Card.Body>
    </Card>
  )
}

export default CitesCard