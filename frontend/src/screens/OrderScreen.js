import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails } from '../actions/orderActions'


const OrderScreen = ({ match }) => {
    const orderId = match.params.id

    const dispatch = useDispatch()


    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails

    if (!loading) {
    order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    }


    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, [])

    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <>
        <h1 className="mtopone">Orden {order._id}</h1>
        <Row>
                <Col className='mtopone' md={8}>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Envío</h2>
                        <strong>Cliente: </strong>{order.user.name}
                        <div>
                            <strong>Direccion: </strong>
                            {order.shippingAddress.address},{' '} {order.shippingAddress.city}
                            <br/>
                            <strong>Telefono: </strong>
                            {order.shippingAddress.phone}
                        </div>
                        <div>
                        {order.isDelivered ? <Message variant='success'>Entregado {order.deliveredAt}</Message> : <Message variant='danger'>Entrega pendiente</Message>}
                        </div>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <h2>Método de Pago</h2>
                        <div>
                            <strong>Paga con: </strong>
                            {order.paymentMethod}
                        </div>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Articulos</h2>
                        <div>
                            <strong>Articulos de la orden: </strong>
                            {order.orderItems.length === 0 ? <Message>No tiene articulos en su orden</Message> : 
                            ( <ListGroup variant='flush'> 
                            {order.orderItems.map((item, index) => (
                                <ListGroup.Item keu={index}>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>

                                        <Col>
                                            <Link to={`/product/${item.name}`}>
                                                {item.name}
                                            </Link>
                                        </Col>

                                        <Col md={4}>
                                            {item.qty} x Lps. {item.price} = Lps. {item.qty * item.price}
                                        </Col>

                                    </Row>
                                </ListGroup.Item>
                            ))}
                            </ListGroup> ) }
                        </div>
                    </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className='mtopone' md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Resumen de la Orden</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Articulos</Col>
                                    <Col>Lps. {order.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Envío</Col>
                                    <Col>Lps. {order.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>Lps. {order.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
    </>
}

export default OrderScreen
