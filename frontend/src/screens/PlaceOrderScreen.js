import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'


const PlaceOrderScreen = ({ history }) => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

    cart.shippingPrice = 50

    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice)

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
        }
        // eslint-disable-next-line
    }, [history, success])
   
    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            totalPrice: cart.totalPrice,
        }))
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col className='mtopone' md={8}>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Envío</h2>
                        <div>
                            <strong>Direccion: </strong>
                            {cart.shippingAddress.address},{' '} {cart.shippingAddress.city}
                            <br/>
                            <strong>Telefono: </strong>
                            {cart.shippingAddress.phone}
                        </div>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <h2>Método de Pago</h2>
                        <div>
                            <strong>Paga con: </strong>
                            {cart.paymentMethod}
                        </div>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Articulos</h2>
                        <div>
                            <strong>Articulos de la orden: </strong>
                            {cart.cartItems.length === 0 ? <Message>No tiene articulos en su orden</Message> : 
                            ( <ListGroup variant='flush'> 
                            {cart.cartItems.map((item, index) => (
                                <ListGroup.Item keu={index}>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>

                                        <Col>
                                            <Link to={`/product/${item.product}`}>
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
                                    <Col>Lps. {cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Envío</Col>
                                    <Col>Lps. {cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>Lps. {cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <ListGroup.Item>
                                    {error && <Message variant='danger'>{error}</Message>}
                                </ListGroup.Item>
                                <Button tupe='button' className='btn-block' disabled={cart.cartItems === 0} onClick={placeOrderHandler}>
                                    Ordenar
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen
