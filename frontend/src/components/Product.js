import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='h5'>
                        {product.name}
                    </Card.Title>
                </Link>

                <Card.Text as='h5'>
                    Lps.{product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
