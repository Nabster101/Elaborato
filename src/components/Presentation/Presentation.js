import React from 'react'
import { Container } from "react-bootstrap";
import "./Presentation.css"

function Presentation (){
    return(
        <div className="PresentationSection">
            <Container className="PresentationContainer">
                <h1 className="PresentationTitle">Benvenuto in Ridental!</h1>
                <div className="Seperators"></div>
                <div className="PresentationText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque cupiditate deleniti eius est id in itaque iure, nihil officiis placeat, quibusdam quisquam quos, recusandae reiciendis rem repellat repellendus voluptate?</div>
            </Container>
        </div>
    )
}
export default Presentation