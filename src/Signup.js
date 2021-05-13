import React, {useEffect, useState} from "react";
import SignUpSection from "./components/SignUpSection/SignUpSection";
import NavbarSite from "./components/NavbarSite/NavbarSite";
import Footer from "./components/Footer/Footer";
import Axios from "axios";

function Signup (){

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
    }, );

    return(
        <div>
            <NavbarSite authenticated={autenticated}/>
            <SignUpSection />
            <Footer authenticated={autenticated}/>
        </div>
    )
}
export default Signup