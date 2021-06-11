import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placheholder='Buscar Producto' classNameq='mr-sm-1 ml-sm-5'></Form.Control>
            <Button type='submit' variant='outline-primary' className='p-2 m-2'>
                Buscar
            </Button>
        </Form>
    )
}

export default SearchBox
