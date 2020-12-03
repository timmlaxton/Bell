import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {listProducts} from '../actions/productActions'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Row, Col} from 'react-bootstrap'

const PrintScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products} = productList

  
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  
  
  return (
    <>
      {loading ? ( <Loader/> ) : error ? ( <Message variant='danger'>{error}</Message> ) : 
       <Row className="rowp"> 
       {products.map(product => (
         <Col className="Col" sm={4} md={4} lg={4} xl={4}>
         <Product product={product} />
         </Col >
       ))}
       </Row>
      }
       
      
    </>
  )
}

export default PrintScreen
