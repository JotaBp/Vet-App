import React from 'react'
import './QueryCard.css'


import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

const QueryCard = (props) => {
  return (
    <Card>
      <Card.Header as="h5">Consulta</Card.Header>
      <Card.Body>
        <Card.Title>{props.subject}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
        <Card.Text>
        {props.description}
        </Card.Text>
        {/* <Button variant="dark"><Link to="">Detalles</Link></Button> */}
      </Card.Body>
    </Card>
  )
}

export default QueryCard