import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Form, Button, Image} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {listProductDetails, updateProduct, createProduct  } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET, PRODUCT_CREATE_RESET } from '../constants/productConstants';

const ImageEditScreen = ({match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('name')
  const [imageUrl, setImageUrl] = useState('')
  const [image, setImage] = useState('')
  const [uploading, setUploading] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const dispatch = useDispatch()  
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product} = productDetails
  const isCreateProductMode = match.path.includes('/product/create')

  const productUpdate = useSelector((state) => isCreateProductMode ? state.productCreate : state.productUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate

  useEffect(() => {
      if(successUpdate) {
        dispatch({type: isCreateProductMode ? PRODUCT_CREATE_RESET : PRODUCT_UPDATE_RESET})
        history.push('/productlist')
        return
      }
      if (isCreateProductMode) 
      return
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setImagePreview(product.image) 
      }
  },[dispatch, productId, product , history, successUpdate, isCreateProductMode])

  const onUploadImage = e => {
    const file = e.target.files[0]
    setImage(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }
  const uploadFileHandler = async () => {
    if (!image) return ''
    const file = image
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const {data} = await axios.post('/api/upload', formData, config)

  
      return data
    } catch (error) {
      console.error(error)
      setUploading(false)
      throw new Error('There was a problem')
    }
  }

    const submitHandler = async (e) => {
      e.preventDefault()
      let finalImage = imageUrl
      if (!finalImage && image) {
        finalImage = await uploadFileHandler()
      }

      const payload = {
        _id: productId,
        name,
        image: finalImage,
      }

      
      dispatch(isCreateProductMode ? createProduct(payload) : updateProduct(payload))
    }

   
  return (
    <> 

    <div className=" qw"> 
    <FormContainer >
  <h1>{isCreateProductMode}</h1>
      {loadingUpdate && <Loader/>}
      {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
          <Form onSubmit={submitHandler}>
          <Form.Group controlId='name' className="" >
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type='name' 
            placeholder="Enter name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          
  
          <Form.Group controlId='image'>
            <Form.Label>Image</Form.Label>
            <Form.Control 
            type='text' 
            placeholder="Enter image url" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)}
            ></Form.Control>
            <br/>

          <Form.File 
            id='image-file' 
            label='Choose File' 
            custom 
            onChange={onUploadImage}></Form.File>
            {uploading && <Loader />}
          </Form.Group>

          {imagePreview ? (<Image src={imagePreview} />) : null}

          <Button type='submit' variant='primary-light' >
           {isCreateProductMode ? 'Create' : 'Update'}
          </Button>
        </Form>
      )}
    </FormContainer>
    </div>
    </>
  )
}

export default ImageEditScreen
