import express from 'express'
import { productsController } from '~/controllers/productsController'
import { authenticateToken } from '~/middlewares/auth'
const Router = express.Router()
Router.post('/', authenticateToken, (req, res) =>
  productsController.createProduct(req, res)
)
Router.get('/', (req, res) => {
  productsController.getAllProducts(req, res)
})
Router.get('/:id', (req, res) => {
  productsController.getProductById(req, res)
})
Router.delete('/:id', authenticateToken, (req, res) => {
  productsController.deleteProductById(req, res)
})
Router.put('/:id', authenticateToken, (req, res) => {
  productsController.handleUpdateProduct(req, res)
})
export const APIProducts = Router