import React, { Component } from 'react'


// import PetService from '../../../../service/pet.service'



// import CiteCard from '../../cites/citesCard/CiteCard'
// import QueryCard from '../../query/queryCard/QueryCard'
// import PetForm from '../../pets/petsForm/PetForm'

import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Figure from 'react-bootstrap/Figure'
// import FigureImage from 'react-bootstrap/FigureImage'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Toast from 'react-bootstrap/Toast'
// import Modal from 'react-bootstrap/Modal'

// import { Link } from 'react-router-dom'
import PetCardClient from '../../pets/petCardClient/PetCardClient'


class DashboardClient extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            userInfo: {
                pets: ""
            }

        }

    }
    

    render() {


        return (
            <>

                <Container as="section" >

                
                {this.props.loggedInUser.pets && this.props.loggedInUser.pets.map(pet =>  <PetCardClient key={pet._id} {...pet} />)}

                </Container>



            </>

        )
    }
}

export default DashboardClient