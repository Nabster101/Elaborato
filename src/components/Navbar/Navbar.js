import React from 'react'
import {Navbar, Nav, Container } from 'react-bootstrap'
import { Link as LinkScroll } from "react-scroll"
import { Link } from "react-router-dom"
import "./Navbar.css"

function NavbarHome(){
    return(
        <div className="NavbarSection">
            <Navbar className="NavbarSelector" fixed="top" expand="lg">
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
                            <LinkScroll to="Home" activeClass="Active" className="nav-link Inactive" spy={true} smooth={true} duration={100} offset={-300} id="NavLinks">Home</LinkScroll>
                            <LinkScroll to="Visite" activeClass="Active" className="nav-link Inactive" spy={true} smooth={true} duration={100} offset={-100} id="NavLinks">Visite</LinkScroll>
                            <Link id="NavLinks" to="/login" className="Inactive nav-link" activeClassName="Active">Login</Link>
                            <Link id="NavLinks" to="/iscriviti" className="Inactive nav-link" activeClassName="Active">Iscriviti</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarHome