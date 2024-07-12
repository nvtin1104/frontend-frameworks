import express from 'express'
import { authController } from '~/controllers/authController'

const Router = express.Router()

Router.post('/login', (req, res) =>
  authController.handleLogin(req, res)
)
Router.post('/getOTP', (req, res) =>
  authController.handleGetOTP(req, res)
)
Router.post('/changePassword', (req, res) =>
  authController.handleUpdatePassword(req, res)
)
Router.post('/loginWithGG', (req, res) =>
  authController.handleLoginWithGG(req, res)
)
export const APIAuth = Router
