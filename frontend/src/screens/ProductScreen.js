import React, { useEffect} from 'react'
import {Row, Col, Image, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listProductDetails} from '../actions/productActions'


const ProductScreen = ({match}) => {
  


  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails
  

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  


return <>
  {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
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
  )}
  </>
}
  


export default ProductScreen
