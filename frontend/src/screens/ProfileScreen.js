import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions' 

const ProfileScreen = ({ location, history }) => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return( <Row>
        <Col md={3}>
        <h2 className="mt-5">Perfil del Usuario</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Perfil Actualizado</Message>}
            {loading && <Loader/>}
            
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                   <Form.Label>Nombre</Form.Label>
                   <Form.Control type='name' placeholder='Ingrese Su Nombre' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
               </Form.Group>
                
                <Form.Group controlId='email'>
                   <Form.Label>Correo Electronico</Form.Label>
                   <Form.Control type='email' placeholder='Ingrese Correo Electronico' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
               </Form.Group>
               
               <Form.Group controlId='password'>
                   <Form.Label>Contraseña</Form.Label>
                   <Form.Control type='password' placeholder='Ingrese Contraseña' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
               </Form.Group>

               <Form.Group controlId='connfirmPassword'>
                   <Form.Label>Confirmar Contraseña</Form.Label>
                   <Form.Control type='password' placeholder='Confirmar Contraseña' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
               </Form.Group>

               <center><Button type='submit' variant='primary'>
                    Actualizar
               </Button>
               </center>
            </Form>

        </Col>

        <Col md={9}>
            <h2>
                Ordenes
            </h2>
        </Col>
    
    </Row>)
}


export default ProfileScreen