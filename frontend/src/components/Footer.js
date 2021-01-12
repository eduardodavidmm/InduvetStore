import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="font-small pt-4 mt-5">
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="6">
                        <h5 className="title">INDUVET</h5>
                        <p className="lead text-dark">
                        Productos veterinarios de la mejor calidad.
                        </p>
                    </Col>
                    <Col md="6">
                        <h5 className="title">Contactanos</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!" className="text-dark font-weight-bold"> <i className="fab fa-facebook"></i> Facebook</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="text-dark font-weight-bold"> <i className="fab fa-instagram"></i> Instagram</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className="text-dark font-weight-bold"> <i className="fab fa-twitter"></i> Twitter</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
            <Container fluid>
                {new Date().getFullYear()} Industria Veterinaria S. de R.L. Derechos Reservados &copy;
            </Container>
            </div>
            </footer>     
    )
}

export default Footer
