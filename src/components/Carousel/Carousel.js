import React from "react"
import {Button, Carousel, Container} from "react-bootstrap"
import CarouselImage1 from "../images/CarouselImage1.jpg"
import CarouselImage2 from "../images/CarouselImage2.jpg"
import CarouselImage3 from "../images/CarouselImage3.jpg"
import "./Carousel.css"
import {Link} from "react-router-dom";

function CarouselHome () {
    return(
        <div id="Home" className="CarouselSection">
            <Carousel interval={5000} fade={true} controls={true} indicators={true} nextLabel={null} prevLabel={null}>
                <Carousel.Item>
                    <img
                    className="CarouselImage"
                    src={CarouselImage1}
                    alt="First slide"
                    />
                    <div className="CarouselSeperator">
                        <Carousel.Caption className="CarouselCaption">
                            <h2>Professionalità</h2>
                            <p className="CarouselText">La nostra priorità è quella di offrirti un serivizio di cui ti puoi fidare</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="CarouselImage"
                    src={CarouselImage2}
                    alt="Second slide"
                    />
                    <div className="CarouselSeperator">
                        <Carousel.Caption className="CarouselCaption">
                            <h2>Fiducia</h2>
                            <p className="CarouselText">Prendiamo il nostro lavoro seriamente e ce la mettiamo tutta per offrirti un servizio affidabile e veloce</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="CarouselImage"
                    src={CarouselImage3}
                    alt="Third slide"
                    />
                    <div className="CarouselSeperator">
                        <Carousel.Caption className="CarouselCaption">
                            <h2>Tecnolgia</h2>
                            <p className="CarouselText">Utilizziamo sempre gli strumenti di ultima generazione per offrirti un servizio sicuro</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Container className="PresentationContainer">
                <h1 className="PresentationTitle">Benvenuto in Ridental!</h1>
                <div className="Seperators"/>
                <div className="PresentationText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque cupiditate deleniti eius est id in itaque iure, nihil officiis placeat, quibusdam quisquam quos, recusandae reiciendis rem repellat repellendus voluptate?</div>
                <Link to="/iscriviti"><Button className="SignUpButton">Iscriviti ora!</Button></Link>
            </Container>
        </div>
    )
}
export default CarouselHome