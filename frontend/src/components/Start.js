import React from 'react'
import Dog from '../images/IntroInduvet.png'
import { Row, Col, Image } from 'react-bootstrap'


const Start = () => {

        return <div className='mtopone'>
                <Row>
                <Col md={7}>
                    <h1 className='mtoptwo leadtag'>Bienvenido a INDUVET</h1>
                    <p className='lead mb-3'><strong>Encuentra los mejores productos veterinarios, de ganadería y bioseguridad, los medicamentos con los estandares más altos y una variedad de productos para tus mascotas y para tu producción</strong></p>
                </Col>
                <Col md={5}>
                    <Image className='mtopone' src={Dog} width="400px" height="auto" fluid /> 
                </Col>
            </Row>
        </div>
    
}

export default Start
