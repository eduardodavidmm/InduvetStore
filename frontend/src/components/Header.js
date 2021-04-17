import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../images/induvet.png'
import { logout } from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

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
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='profile'>
                                    <NavDropdown.Item>Perfil</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                        ) : 
                        <LinkContainer to='/login'>
                        <Nav.Link><i className='fas fa-user'></i> Iniciar Sesion</Nav.Link>
                        </LinkContainer>}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
