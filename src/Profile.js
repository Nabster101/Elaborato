import React, {useEffect, useState} from "react";
import Axios from "axios";
import NavbarSite from "./components/NavbarSite/NavbarSite";
import Profile from "./Profile";
import FooterSite from "./components/FooterSite/FooterSite";

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
            <NavbarSite authenticated={autenticated} />
            <Profile/>
            <FooterSite authenticated={autenticated}/>
        </div>
    )
}
export default Home