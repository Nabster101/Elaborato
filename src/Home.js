import React, {useEffect, useState} from "react";
import NavbarHome from "./components/NavbarHome/NavbarHome";
import CarouselHome from "./components/Carousel/Carousel";
import Visite from "./components/Visite/Visite";
import FooterHome from "./components/FooterHome/FooterHome";
import Axios from "axios";

function Home (){

    const [autenticated, setAuthenticated] = useState( false )

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/login/check").then((response) => {
            if (localStorage.getItem('jwt')!== null){
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
            }
        })
    }, []);

    return(
        <div>
            <NavbarHome authenticated={autenticated} />
            <CarouselHome/>
            <Visite/>
            <FooterHome authenticated={autenticated}/>
        </div>
    )
}
export default Home