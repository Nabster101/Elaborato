import React, {useEffect, useState} from "react";
import Axios from "axios";
import NavbarSite from "./components/NavbarSite/NavbarSite";
import FooterSite from "./components/FooterSite/FooterSite";
import ProfileSection from "./components/ProfileSection/ProfileSection";

function Profile (){

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
            <ProfileSection />
            <FooterSite authenticated={autenticated}/>
        </div>
    )
}
export default Profile