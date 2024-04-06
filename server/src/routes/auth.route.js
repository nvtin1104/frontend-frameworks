import express from 'express'
import { authController } from '~/controllers/authController'

const Router = express.Router()

Router.post('/login', (req, res) =>
  authController.handleLogin(req, res)
)

export const APIAuth = Router
