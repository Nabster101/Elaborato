import React from "react";
import "./Visite.css"
import {Card, Col, Container, Row, Button } from "react-bootstrap";
import VisitCard2 from "../images/VisitCard2.jpg"
import {Link} from "react-router-dom";

function Visite (){
    return(
        <div id="Visite" className="VisiteSection">
            <Container className="VisiteTitleContainer">
                <Row>
                    <Col>
                        <h1>Prenota una visita</h1>
                        <div className="Seperators" />
                        <div className="VisiteText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque cupiditate deleniti eius est id in itaque iure, nihil officiis placeat, quibusdam quisquam quos, recusandae reiciendis rem repellat repellendus voluptate?</div>

                    </Col>
                </Row>
            </Container>
            <Container className="VisiteContainer">
                <Row className="jmt-5 justify-content-evenly">
                    {[...Array(3)].map((x, i) =>
                        <Col md="auto">
                            <Card key={i} style={{width: "300px"}}>
                                <Card.Img variant="top" src={VisitCard2} />
                                <Card.Body>
                                    <Card.Title>Igiene dentale</Card.Title>
                                    <Card.Text>
                                        Previene la creazione di patologie oro-dentali, con la cura dell'igiene orale!
                                        Prenota ora per ricevere un trattamento fantastico del tuo sorriso. Tornerai a brillare!
                                    </Card.Text>
                                    <Button variant="primary"><Link style={{textDecoration: 'none', color: 'white'}} to='/prenotazione'>Prenota ora</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Row className="mt-5 justify-content-evenly">
                    {[...Array(3)].map((x, i) =>
                        <Col md="auto">
                            <Card key={i} style={{width: "300px"}}>
                                <Card.Img variant="top" src={VisitCard2}  />
                                <Card.Body>
                                    <Card.Title>Dentiera mobile</Card.Title>
                                    <Card.Text>
                                        Grazie alla professionalità dei nostri odontoiatri faremo un piccolo e veloce intervento per aggiustare l'assetto dei tuoi denti!
                                    </Card.Text>
                                    <Button variant="primary"><Link style={{textDecoration: 'none', color: 'white'}} to='/prenotazione'>Prenota ora</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}
export default Visite