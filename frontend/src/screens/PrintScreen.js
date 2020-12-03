import React from 'react'
import products from '../products'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'

const PrintScreen = () => {
  return (
    <>
      
        <Row className="rowp"> 
        {products.map(product => (
          <Col className="Col" sm={4} md={4} lg={4} xl={4}>
          <Product product={product} />
          </Col >
        ))}
        </Row>
      
    </>
  )
}

export default PrintScreen
