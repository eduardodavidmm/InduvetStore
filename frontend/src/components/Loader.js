import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <Spinner animation='border' variant='primary' role='status' style={{width: '100px', height: '100px', margin: 'auto', display: 'block'}}>
            <span className='st-only'>
            </span> 
        </Spinner>
    )
}


export default Loader

