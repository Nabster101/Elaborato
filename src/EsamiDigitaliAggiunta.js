import React, {useEffect, useState} from "react";
import NavbarSite from "./components/NavbarSite/NavbarSite";
import Axios from "axios";
import FooterSite from "./components/FooterSite/FooterSite";
import EsamiDigitaliCreazione from "./components/EsamiDigitaliCreazione/EsamiDigitaliCreazione";

function EsamiDigitaliAggiunta () {

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
            <EsamiDigitaliCreazione />
            <FooterSite authenticated={autenticated} />
        </div>
    )
}
export default EsamiDigitaliAggiunta