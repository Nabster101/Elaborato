import React from "react";
import Footer from "./components/Footer/Footer";
import LoginSection from "./components/LoginSection/LoginSection";
import NavbarSite from "./components/NavbarSite/NavbarSite";

function Login (){
    return(
        <div>
            <NavbarSite />
            <LoginSection />
            <Footer />
        </div>
    )
}
export default Login