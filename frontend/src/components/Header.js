import React from 'react'
import { LinkContainer, Link } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import Logo from '../images/induvet.png'

const Header = () => {
    return (
        <header>
            <Navbar className="navbar fixed-top mb-6" bg='light' variant='light' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                    <img width="60px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>  
                        <LinkContainer to='/cart'>
                        <Nav.Link><i className='fas fa-cart-plus'></i> Compras</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                        <Nav.Link><i className='fas fa-user'></i> Iniciar Sesion</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
