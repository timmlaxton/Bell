import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// Fetch all products
// GET /api/products
// Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// Fetch single product
// GET /api/products/:id
// Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if(product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
  
})

// Delete a product
// DELETE /api/products/:id

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if(product) {
    await product.remove()
    res.json({message: 'Product Removed'})
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
  
})

// Create product
// POST /api/products
// Private Admin
const createProduct = asyncHandler (async (req, res) => {
  const {name, image} = req.body
  const product = new Product({
    name: 'Sample',
    image: 'Sample',
    user: req.user
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// Update product
// PUT /api/products/:id
// Private Admin
const updateProduct = asyncHandler (async (req, res) => {
  const {name, image } = req.body

  const product = await Product.findById(req.params.id)

  if(product) {
    product.name = name
    product.image = image
    
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Produt not found')
  }
})


export {
  getProducts, getProductById, deleteProduct, createProduct, updateProduct
}

