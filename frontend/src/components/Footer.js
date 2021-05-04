import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer font-small pt-4 mt-5 foot">
            <Container fluid className="text-center">
                <Row>
                    <Col md={4}>
                        <h5 className="title">INDUVET</h5>
                        <p className="lead text-dark">
                        Productos veterinarios de la mejor calidad.
                        <br/>
                        PBX: 2236-5531
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5 className="title">Francisco Morazán</h5>
                        <p className="lead text-dark">
                        Tegucigalpa, Boulevard Morazán, Edificio Alvarenga
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5 className="title">Cortés</h5>
                        <p className="lead text-dark">
                        San Pedro Sula, 5ta Avenida Lempira (Los Leones) Entre 10 y 11 Calle
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
            <Container className="footersocial">
            <a href="https://es-la.facebook.com/InduvetHonduras/" target="_blank" rel="noreferrer" className="footer__icon"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com/induvethn" target="_blank" rel="noreferrer" className="footer__icon"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/50494451634" target="_blank" rel="noreferrer" className="footer__icon"><i className="fab fa-whatsapp"></i></a>
            </Container>
            <Container fluid>
                {new Date().getFullYear()} Industria Veterinaria S. de R.L. Derechos Reservados &copy;
            </Container>
            </div>
            </footer>     
    )
}

export default Footer
