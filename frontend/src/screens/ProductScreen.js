import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'

const ProductScreen = ({ match }) => {

    const product = products.find((p) => p._id === match.params.id) 

        return <div>
            <Link className="btn btn-light my-3" to="/">Regresar</Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid /> 
                </Col>
                <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Precio: Lps. {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Descripción: Lps. {product.description}
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Precio:</Col>
                                    <Col>
                                        <strong>Lps. {product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Estado:</Col>
                                    <Col>
                                       {product.countInStock > 0 ? 'Disponible' : 'Agotado'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Añadir a Orden
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        
        </div>
    
}

export default ProductScreen
