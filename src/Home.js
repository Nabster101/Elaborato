import React from "react";
import NavbarHome from "./components/NavbarHome/NavbarHome";
import CarouselHome from "./components/Carousel/Carousel";
import Visite from "./components/Visite/Visite";
import Footer from "./components/Footer/Footer";

function Home (){
    return(
        <div>
            <NavbarHome/>
            <CarouselHome/>
            <Visite/>
            <Footer/>
        </div>
    )
}
export default Home