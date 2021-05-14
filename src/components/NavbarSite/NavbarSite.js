import React from 'react'
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap'
import {Link, NavLink} from "react-router-dom"
import "./NavbarSite.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function NavbarSite({ authenticated }){
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Link
            id="NavLinks"
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <FontAwesomeIcon id="ChevronIcon" icon={faChevronDown}/>
        </Link>
    ));

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
                            <NavLink to="/home" activeClassName="Active" className="nav-link Inactive" id="NavLinks">Home</NavLink>
                            <NavLink to="/home" activeClassName="Active" className="nav-link Inactive" id="NavLinks">Visite</NavLink>
                            {authenticated ?

                                <>
                                    <NavLink to="/prestazioni" activeClassName="Active" className="Inactive nav-link" id="NavLinks">Prestazioni</NavLink>
                                    <NavLink to="/profilo" activeClassName="Active" className="Inactive nav-link" id="NavLinks">

                                        <Dropdown>
                                            <Dropdown.Toggle id="NavLinks" as={CustomToggle}>
                                                Profilo
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </NavLink>
                                </>

                                :

                                <>
                                    <NavLink to="/login" activeClassName="Active" className="Inactive nav-link" id="NavLinks">Login</NavLink>
                                    <NavLink to="/iscriviti" activeClassName="Active" className="Inactive nav-link" id="NavLinks">Iscriviti</NavLink>
                                </>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarSite