import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import products from '../products'

const ProductScreen = ({match}) => {
  const product = products.find(p => p._id === match.params.id)


return <>
  
  <Row>
    <Col md={6}>
      <Image className="productimage" src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
      <ListGroup variant='flush'>
        <ListGroup.Item>
        <h3 className="productname">{product.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <h3 className="producttype">{product.type}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <h3 className="productlocation">{product.location}</h3>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
</>
  
}

export default ProductScreen
