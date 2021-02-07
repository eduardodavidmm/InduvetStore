import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'



const ProductScreen = ({ match }) => {
    
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
          dispatch(listProductDetails(match.params.id))  
    }, [dispatch, match])


        return <div>
            <Link className="btn btn-light my-5" to="/">Regresar</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
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
                        Descripción: {product.description}
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
            )}
            
        
        </div>
    
}

export default ProductScreen
