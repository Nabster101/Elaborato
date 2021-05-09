import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function NavbarHome(){
    return(
        <div className="NavbarSection">
            <Navbar className="NavbarSelector" sticky={true} expand="lg">
                <Container>
                    <Navbar.Brand id="NavbarText" href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ridental
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink id="NavLinks" to="/home" className="Inactive nav-link" activeClassName="Active">Home</NavLink>
                            <NavLink id="NavLinks" to="/visite" className="Inactive nav-link" activeClassName="Active">Visite</NavLink>
                            <NavLink id="NavLinks" to="/login" className="Inactive nav-link" activeClassName="Active">Login</NavLink>
                            <NavLink id="NavLinks" to="/iscriviti" className="Inactive nav-link" activeClassName="Active">Iscriviti</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarHome