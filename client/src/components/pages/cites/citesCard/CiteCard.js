import React from 'react'
import './CitesCard.css'

import Card from 'react-bootstrap/Card'

const CitesCard = (props) => {
  return (
    <Card as="article" className="cite-card">
      <Card.Header as="h4" className="header-cite-card">Cita</Card.Header>
      <Card.Body>
        <Card.Title>{props.subject}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
        <Card.Text as="p" className="text-description">
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CitesCard