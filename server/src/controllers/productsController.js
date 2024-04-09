import { ProductsService } from '~/services/products.service'
import { StatusCodes } from 'http-status-codes'
const createProduct = async (req, res) => {
  try {
    const product = req.body
    const products = await ProductsService.createProduct(product)
    res.status(StatusCodes.CREATED).json(products)
  }
  catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductsService.getAllProducts()
    res.status(StatusCodes.CREATED).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const products = await ProductsService.getProductById(id)
    res.status(StatusCodes.CREATED).json(products)
  }
  catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params
    const products = await ProductsService.deleteProductById(id)
    res.status(StatusCodes.CREATED).json(products)
  }
  catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleUpdateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = req.body
    const products = await ProductsService.updateProduct(id, product)
    res.status(StatusCodes.CREATED).json(products)
  }
  catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
export const productsController = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  handleUpdateProduct
}