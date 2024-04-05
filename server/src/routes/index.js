import express from 'express'
import { APIUsers } from './user.route'
import { APIAuth } from './auth.route'
import { APIProducts } from './products.route'


const Router = express.Router()

// api compiler
Router.use('/users', APIUsers)
Router.use('/login', APIAuth)
Router.use('/products', APIProducts)
export const APIs = Router
