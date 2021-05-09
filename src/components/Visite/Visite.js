import React from "react";
import "./Visite.css"
import {Card, Col, Container, Row, Button } from "react-bootstrap";
import VisitCard from "../images/VisitCard.jpg"
import VisitCard2 from "../images/VisitCard2.jpg"

function Visite (){
    let objects;
    return(
        <div className="VisiteSection">
            <Container className="VisiteContainer">
                <Row className="jmt-5 justify-content-evenly">
                    {[...Array(3)].map((x, i) =>
                        <Col md="auto">
                            <Card key={i} style={{width: "300px"}}>
                                <Card.Img variant="top" src={VisitCard2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
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
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
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