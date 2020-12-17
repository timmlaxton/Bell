import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'



const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded border-0'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top'/>
        </Link>
        <Card.Body>
        <a href={`/product/${product._id}`}>
        </a>
      </Card.Body>
    </Card>
  )  
}

export default Product
