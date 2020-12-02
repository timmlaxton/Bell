import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col, Image, ListGroup} from 'react-bootstrap'



const ProductScreen = ({match}) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${match.params.id}`)

      setProduct(data)
    }

    fetchProduct()
  }, [match])


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
          <h3 className="producttype">{product.location}</h3>
        </ListGroup.Item>
        
      </ListGroup>
    </Col>
  </Row>
</>
  
}

export default ProductScreen
