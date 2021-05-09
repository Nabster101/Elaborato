import React from "react";
import SignUpSection from "./components/SignUpSection/SignUpSection";
import NavbarSite from "./components/NavbarSite/NavbarSite";
import Footer from "./components/Footer/Footer";

function Signup (){
    return(
        <div>
            <NavbarSite />
            <SignUpSection />
            <Footer />
        </div>
    )
}
export default Signup