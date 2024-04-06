import express from 'express'
import { APIUsers } from './user.route'
import { APIAuth } from './auth.route'
import { APIProducts } from './products.route'
import { APICart } from './cart.route'
import { APIOrder } from './order.route'


const Router = express.Router()

// api compiler
Router.use('/users', APIUsers)
Router.use('/auth', APIAuth)
Router.use('/products', APIProducts)
Router.use('/cart', APICart)
Router.use('/orders', APIOrder)
export const APIs = Router
