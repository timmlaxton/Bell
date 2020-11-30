import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import products from '../products'

const ProductScreen = ({match}) => {
  const product = products.find(p => p._id === match.params.id)


return <>
  <Link className='btn btn-dark my-3' to='/homescreen'>Go Back</Link>
  <Row>
    <Col md={6}>
      <Image src={product.image} alt={product.name} />
    </Col>
    <Col md={3}>

    </Col>
  </Row>
</>
  
}

export default ProductScreen
