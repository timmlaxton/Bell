import React, { useEffect} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button, Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listProducts, deleteProduct, createProduct } from '../actions/productActions'
import {PRODUCT_CREATE_RESET} from '../constants/productConstants'


const ImageScreen = ({history, match}) => {
  const dispatch = useDispatch()
 
  const productList = useSelector((state) => state.productList)
  const {loading, error, products} = productList

  const productDelete = useSelector((state) => state.productDelete)
  const {loading: loadingDelete, error:errorDelete, success:successDelete} = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {loading:loadingCreate, error:errorCreate, success:successCreate, product:createdProduct} = productCreate

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    dispatch({type: PRODUCT_CREATE_RESET})
     
    
      if(successCreate) {
        history.push(`/product/${createdProduct._id}/edit}`)
      } else {
        dispatch(listProducts())
      }
  }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct ])

  const deleteHandler = (id) => {
    if(window.confirm('Are you sure?')){
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())    
  }

  return (
    <>
    <Row className='align-items'>
      <Col className="image-title">
      <h1>Images</h1>
      </Col>
      <Col className='create-button'>
        <Button className='my-3 light' onClick={createProductHandler}>
            <i className='fa fa-plus'></i> Add Image
        </Button>
      </Col>
    </Row>
      
      {loadingCreate && <Loader/>}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message> }
      {loadingDelete && <Loader/>}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message> }
      {loading ? ( <Loader/> ) : error ? ( <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <></>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                
                <td>
                  <LinkContainer to={`/product/${product._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </>
      )}
        </>
  )
}

export default ImageScreen
