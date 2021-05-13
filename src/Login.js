import React, {useEffect, useState} from "react";
import Footer from "./components/Footer/Footer";
import LoginSection from "./components/LoginSection/LoginSection";
import NavbarSite from "./components/NavbarSite/NavbarSite";
import Axios from "axios";

function Login (){

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
            <LoginSection />
            <Footer authenticated={autenticated}/>
        </div>
    )
}
export default Login