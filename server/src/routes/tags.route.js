import express from 'express'
import { tagsController } from '~/controllers/tagsController'
import { authenticateToken } from '~/middlewares/auth'
const Router = express.Router()
Router.get('/', authenticateToken, (req, res) =>
  tagsController.handleGetAllTags(req, res)
)
Router.post('/', authenticateToken, (req, res) =>
  tagsController.handleCreateTag(req, res)
)
Router.patch('/:id', authenticateToken, (req, res) =>
  tagsController.handleUpdateTag(req, res)
)
Router.delete('/:id', authenticateToken, (req, res) =>
  tagsController.handleDeleteTag(req, res)
)
export const APITags = Router