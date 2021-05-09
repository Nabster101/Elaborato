import React from "react";
import "./Footer.css"
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"


function Footer (){
    return(
        <div className="FooterSection">
            <Container className="FooterContainer">
                <Row className="justify-content-evenly">
                    <Col className="FooterCol">
                        <Container className="FooterLinkContainer">
                            <Row className="justify-content-center">
                                <Col>
                                    <LinkScroll to="Home"  activeClass="Active" className="Inactive GridItem" spy={true} smooth={true} duration={100} offset={-300}>Home</LinkScroll>
                                </Col>
                                <Col>
                                    <LinkScroll to="Visite"  activeClass="Active" className="Inactive GridItem" spy={true} smooth={true} duration={100} offset={-300}>Visite</LinkScroll>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col>
                                    <Link to="/login" className="GridItem">Login</Link>
                                </Col>
                                <Col>
                                    <Link to="/iscriviti" className="GridItem">Iscriviti</Link>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="FooterCol">
                        <div className="FooterSocialTitle">- Social -</div>
                        <ui className="list-unstyled">
                            <li className="SocialItem"><FontAwesomeIcon icon={ faLinkedin } /><a href="https://www.linkedin.com/" className="SocialLink">  Ridental</a></li>
                            <li className="SocialItem"><FontAwesomeIcon icon={ faFacebook } /><a href="https://www.facebook.com/" className="SocialLink">  Ridental</a></li>
                            <li className="SocialItem"><FontAwesomeIcon icon={ faTwitter } /><a href="https://www.twitter.com/" className="SocialLink">  @Ridental</a></li>
                            <li className="SocialItem"><FontAwesomeIcon icon={ faInstagram } /><a href="https://www.instagram.com/" className="SocialLink">  ridental.official</a></li>
                        </ui>
                    </Col>
                    <Col className="FooterCol">
                        <div className="FooterContactsTitle">- Contatti -</div>
                        <ui className="list-unstyled">
                            <li className="SocialItem"><FontAwesomeIcon icon={ faPhone } /> (+39) 388 219 2302 </li>
                            <li className="SocialItem"><FontAwesomeIcon icon={ faEnvelope } /><a href="mailto:dentalive@clinicadentalive.rm.it" className="SocialLink">  dentalive@clinicadentalive.rm.it</a></li>
                            <li className="SocialItem"><FontAwesomeIcon icon={ faMapMarkerAlt } /><a href="https://www.google.it/maps/place/Via+di+Boccea,+743,+00166+Roma+RM/@41.9229966,12.3658438,17z/data=!3m1!4b1!4m5!3m4!1s0x132f5ede34d57b7b:0x6bf0dddee06dc320!8m2!3d41.9229926!4d12.3680325?hl=it&authuser=0" className="SocialLink">  Via Boccea 743 00165 ROMA (RM)</a></li>
                        </ui>
                    </Col>
                </Row>
                <hr className="FooterSeperator" />
                <Row>
                    <Col>
                        <p className="FooterRights col-sm">
                            &copy;{new Date().getFullYear()} RIDENTAL | Tutti i diritti riservati |
                            Termini di servizio | Privacy
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer