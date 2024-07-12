import express from 'express'
import { orderController } from '~/controllers/orderController'
import { authenticateToken } from '~/middlewares/auth'

const Router = express.Router()
Router.post('/', authenticateToken, (req, res) =>
    orderController.handleCreateOrder(req, res)
)
Router.get('/', authenticateToken, (req, res) =>
    orderController.handleGetAllOrder(req, res)
)
Router.get('/:id', authenticateToken, (req, res) =>
    orderController.handleGetOrderDetail(req, res)
)
Router.get('/user/:id', authenticateToken, (req, res) =>
    orderController.handleGetOrderByUserId(req, res)
)
Router.put('/:id', authenticateToken, (req, res) =>
    orderController.handleUpdateOrder(req, res)
)
Router.post('/cart', authenticateToken, (req, res) =>
    orderController.handleGetDetailCart(req, res)
)
export const APIOrder = Router