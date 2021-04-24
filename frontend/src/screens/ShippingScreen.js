import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'


const ShippingScreen = ({ history }) => {


    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [phone, setPhone] = useState(shippingAddress.phone)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const SubmitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, phone, country }))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1 className="mtopone">Orden</h1>

            <Form onSubmit={SubmitHandler}>
            
            <Form.Group controlId='address'>
                   <Form.Label>Dirección</Form.Label>
                   <Form.Control type='address' required placeholder='Ingrese Su Dirección' value={address} onChange={(e) => setAddress(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
                   <Form.Label>Ciudad / Departamento</Form.Label>
                   <Form.Control type='city' required placeholder='Ingrese Su Ciudad' value={city} onChange={(e) => setCity(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='phone'>
                   <Form.Label>Telefono</Form.Label>
                   <Form.Control type='phone' required placeholder='Ingrese Su Telefono' value={phone} onChange={(e) => setPhone(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
                   <Form.Label>Pais</Form.Label>
                   <Form.Control type='country' placeholder='Ingrese Su Pais' value={country} onChange={(e) => setCountry(e.target.value)}></Form.Control>
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

export default ShippingScreen
