import React from 'react'
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'
import { Link as LinkScroll } from "react-scroll"
import {Link, NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./NavbarHome.css"
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function NavbarHome({ authenticated }){

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
                            <LinkScroll to="Home" activeClassName="Active" className="nav-link Inactive" spy={true} smooth={true} duration={100} offset={-300} id="NavLinks">Home</LinkScroll>
                            <LinkScroll to="Visite" activeClassName="Active" className="nav-link Inactive" spy={true} smooth={true} duration={100} offset={-100} id="NavLinks">Visite</LinkScroll>
                            { authenticated ?

                                <>
                                    <NavLink to="/prestazioni" activeClassName="Active" className="Inactive nav-link" id="NavLinks">Prestazioni</NavLink>
                                    <NavLink to="/profilo" activeClassName="Active" className="Inactive nav-link" id="NavLinks">
                                        <Dropdown>
                                            <Dropdown.Toggle id="NavLinks" as={CustomToggle}>
                                                Profilo
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item><Link style={{textDecoration: 'none', color: 'black'}} to="/profilo">Profilo</Link></Dropdown.Item>
                                                <Dropdown.Item><Link style={{textDecoration: 'none', color: 'black'}} to="/esami-digitali">Esami digitali</Link></Dropdown.Item>
                                                <Dropdown.Item>Log out</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </NavLink>
                                </>

                                :

                                <>
                                    <Link id="NavLinks" to="/login" className="Inactive nav-link" activeClassName="Active">Login</Link>
                                    <Link id="NavLinks" to="/iscriviti" className="Inactive nav-link" activeClassName="Active">Iscriviti</Link>
                                </>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarHome