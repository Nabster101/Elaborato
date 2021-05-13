import React, {useEffect, useState} from "react";
import NavbarSite from "./components/NavbarSite/NavbarSite";
import PrenotazioniSection from "./components/PrenotazioniSection/Prenotazioni";
import Footer from "./components/Footer/Footer";
import Axios from "axios";

function Prenotazioni () {

    const [autenticated, setAuthenticated] = useState( false );


    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/login/check").then((response) => {
            if (localStorage.getItem('jwt')!== null){
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
            }
        })
    }, );

    return(
        <div>
            <NavbarSite authenticated={autenticated}/>
            <PrenotazioniSection />
            <Footer authenticated={autenticated} />
        </div>
    )
}
export default Prenotazioni