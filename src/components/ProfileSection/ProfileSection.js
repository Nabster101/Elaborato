import React, {useEffect, useState} from "react";
import "./ProfileSection.css"
import ProfilePic from "../images/ProfilePicture.jpg"
import {Col, Container, Row, Button} from "react-bootstrap";
import Axios from "axios";
import {Link} from "react-router-dom";

function ProfileSection (){

    const [Informazioni, setInformazioni] = useState([])

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/profilo", { headers: {'Authorization': `Bearer ${localStorage.jwt}`} }).then((response) => {
            setInformazioni(response.data)
        })
    }, []);

    function getRandomInt(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

    return(
        <div className="ProfileSection">
            <div className="Particles">
                
            </div>
            <div className="ProfileContainer">
                <Container className="ProfileBox">
                    <Row>
                        <Col md={3}>
                            <img className="ProfilePicture" alt="ProfilePic" src={ProfilePic}/>
                        </Col>
                        <Col  md={4}>
                            {Informazioni.map(informazione => (
                                <div>
                                    <div className="ProfileTitle">Ciao {informazione.Nome} {informazione.Cognome}!</div>
                                    <div><Button className="mt-3"><Link style={{textDecoration: 'none', color: 'white'}} to="/prestazioni">Controlla le tue prenotazioni</Link></Button></div>
                                    <div><Button className="middleButton"><Link style={{textDecoration: 'none', color: 'white'}} to="/esami-digitali">Controlla i tuoi esami digitali fatti</Link></Button></div>
                                    <div><Button><Link style={{textDecoration: 'none', color: 'white'}} to="/prenotazione">Prenota un appuntamento</Link></Button></div>
                                </div>
                            ))}
                        </Col>
                        <Col md={5}>
                            <div className="TextContainer">
                                <div style={{fontSize: '25px'}} className="ProfileTitle">Grazie al nostro intervento la tua bocca è</div>
                                <div className="Percentage">{getRandomInt(20, 100)}%</div>
                                <div style={{fontSize: '25px', textAlign: 'center'}} className="ProfileTitle">più sana!</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default ProfileSection