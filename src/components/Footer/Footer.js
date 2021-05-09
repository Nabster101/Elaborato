import React from "react";
import "./Footer.css"
import {Col, Container, Row} from "react-bootstrap";

function Footer (){
    return(
        <div className="FooterSection">
            <Container>
                <Row>
                    <Col>
                        <img
                            alt=""
                            src="/logo.svg"
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer