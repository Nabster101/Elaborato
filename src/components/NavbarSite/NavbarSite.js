import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import "./NavbarSite.css"

function NavbarSite(){
    return(
        <div className="NavbarSection">
            <Navbar className="NavbarSelector" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand id="NavbarText" href="/home">
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
                            <NavLink to="/home" activeClass="Active" className="nav-link Inactive" id="NavLinks">Home</NavLink>
                            <NavLink to="/home" activeClass="Active" className="nav-link Inactive" id="NavLinks">Visite</NavLink>
                            <NavLink to="/login" activeClassName="Active" className="Inactive nav-link" id="NavLinks">Login</NavLink>
                            <NavLink to="/iscriviti" activeClassName="Active" className="Inactive nav-link" id="NavLinks">Iscriviti</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarSite