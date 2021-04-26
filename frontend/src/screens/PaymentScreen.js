import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'



const PaymentScreen = ({ history }) => {


    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('Efectivo')

    const dispatch = useDispatch()

    const SubmitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1 className="mtopone">Metodo de Pago</h1>

            <Form onSubmit={SubmitHandler}>
            
            <Form.Group>
                <Form.Label as='legend'>Seleccione Metodo de Pago</Form.Label>


            <Col>
                <Form.Check type='radio' label='Efectivo' id='Efectivo' name='paymentMethod' value='Efectivo' checked onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                <Form.Check type='radio' label='Tarjeta de Credito' id='Tarjeta de Credito' name='paymentMethod' value='Tarjeta de Credito' onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
            </Col>

            </Form.Group>
            
            <center>
            <Button type='submit' variant='primary'>
                Procesar
            </Button>
            </center>
            
            </Form>

        </FormContainer>
    )
}

export default PaymentScreen
