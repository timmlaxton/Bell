import React from 'react'
import products from '../products'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      
        <Row className="row"> 
        {products.map(product => (
          <Col className="Col" sm={1} md={1} lg={1} xl={1}>
          <Product product={product} />
          </Col >
        ))}
        </Row>
      
    </>
  )
}

export default HomeScreen
