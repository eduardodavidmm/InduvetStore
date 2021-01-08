import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

const Header = () => {
    return (
        <header>
            <Navbar className="navbar" bg='light' variant='light' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>INDUVET</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link href='/cart'><i className='fas fa-cart-plus'></i> Compras</Nav.Link>
                        <Nav.Link href='/login'><i className='fas fa-user'></i> Iniciar Sesion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
