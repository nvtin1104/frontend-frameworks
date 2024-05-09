import express from 'express'
import { cartController } from '~/controllers/cartController'
import { authenticateToken } from '~/middlewares/auth'

const Router = express.Router()
Router.post('/', authenticateToken, (req, res) =>
  cartController.handleAddToCart(req, res)
)
Router.delete('/:id', authenticateToken, (req, res) =>
  cartController.handleDeleteCart(req, res)
)
Router.get('/:id', authenticateToken, (req, res) =>
  cartController.handleGetAllCart(req, res)
)
export const APICart = Router