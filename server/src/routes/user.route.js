import express from 'express'
import { usersController } from '~/controllers/usersController'
import { authenticateToken } from '~/middlewares/auth'

const Router = express.Router()

Router.get('/', authenticateToken, (req, res) =>
  usersController.getAllUsers(req, res)
)
Router.get('/:id', authenticateToken, (req, res) =>
  usersController.getUserById(req, res)
)
Router.post('/', authenticateToken, (req, res) =>
  usersController.createUser(req, res)
)
Router.delete('/:id', authenticateToken, (req, res) =>
  usersController.deleteUser(req, res)
)
Router.patch('/:id', authenticateToken, (req, res) =>
  usersController.updateUser(req, res)
)
Router.patch('/password/:id', authenticateToken, (req, res) =>
  usersController.handleUpdatePassword(req, res)
)
Router.post('/get', (req, res) =>
  usersController.getUserByToken(req, res)
)


export const APIUsers = Router
