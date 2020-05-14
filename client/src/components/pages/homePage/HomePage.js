import React from 'react'
import './HomePage.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'


const HomePage = () => {
    return (
        <>

            <Container as="section">

                <Row>
                    <Col as="article" lg={3} md={6}>


                        <Figure>

                            <FigureImage
                                // width={171}
                                // height={180}
                                alt="Soluciones de gestion veterinaria"
                                src="images/ordenador.jpeg"
                            />

                        </Figure>



                    </Col>

                    <Col as="article" lg={3} md={6}>
                        <h1>Evoluciona</h1>

                        <p>Vet App es el futuro de la gestión veterinaria.
                        Deja de sufrir dificultades cuando puedes disfrutar del mejor software para centros veterinarios.
                        Un programa on-line, fácil de manejar, intuitivo , que te ofrece todo lo que puedas imaginar y más.</p>

                    </Col>

                </Row>


            </Container>

            <Container as="section">

                <Row>

                    <Col as="article" lg={3} md={6}>

                        <h2>Rápido y Sencillo</h2>
                        <p>Vet App es tan intuitivo que aprenderás a manejarlo en minutos.
                        Su interfaz está diseñada para que todos los procesos sean ágiles
                        y la información llegue a ti de manera simple y bien estructurada.</p>

                    </Col>
                    <Col as="article" lg={3} md={6}>

                        <Figure>

                            <FigureImage
                                // width={171}
                                // height={180}
                                alt="Veterinario hípico"
                                src="images/veterinario_caballos.jpg"
                            />

                        </Figure>
                    </Col>

                </Row>


            </Container>

            <Container as="section">

                <Row>
                    <Col as="article" lg={3} md={6}>


                        <Figure>

                            <FigureImage
                                // width={171}
                                // height={180}
                                alt="veterinaria pequeños animales"
                                src="images/veterinari_en_accion.jpg"
                            />

                        </Figure>

                    </Col>

                    <Col as="article" lg={3} md={6}>

                        <h2>Seguro y Fiable</h2>

                        <p>Sabemos lo importante que es tu prestigio profesional y tu negocio.
                        Puedes estar tranquilo en todo momento.
                        Nuestra infraestructura de sistemas te liberan del mantenimiento.</p>

                    </Col>

                </Row>


            </Container>

            <Container as="section">

                <Row>

                    <Col as="article" lg={3} md={6}>

                        <h2> Vet App es Para Ti </h2>

                        <p>¡Confía en el mejor servicio de atención al cliente!
                        El software de gestión mejor valorado por sus usuarios.
                        Te acompañamos en cada paso hacia el éxito de tu negocio.</p>

                    </Col>
                    <Col as="article" lg={3} md={6}>

                        <img alt="" />
                        <Figure>

                            <FigureImage
                                // width={171}
                                // height={180}
                                alt="Saludo de los veterinarios haciendo grupo"
                                src="images/grupo_veterinarios.jpeg"
                            />

                        </Figure>

                    </Col>

                </Row>


            </Container>

            <Container as="footer">

                <Row>
                    <Col as="article" lg={3} md={6}>
                        <Figure>

                            <FigureImage
                                // width={171}
                                // height={180}
                                alt="icono e la marca Vet App"
                                src="images/icono_veterinario.png"
                            />

                        </Figure>

                        <p>Puedes encontrarnos en:
                        Facebook
                        YouTube
                        Encontrarás tutoriales, novedades, ayuda y todo tipo de información útil.</p>

                    </Col>

                    <Col as="article" lg={3} md={6}>

                        <p>Vet App es un software online de gestión de centros veterinarios
                        totalmente orientado a conseguir que tu equipo pueda trabajar de una forma ágil y coordinada,
                          abarcando todas las áreas y así ayudarte al exito de tu negocio.</p>

                    </Col>

                    <Col as="article" lg={3} md={6}>

                    </Col>

                </Row>


            </Container>



        </>
    )
}

export default HomePage