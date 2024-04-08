import express from 'express'
import { dashboardController } from '~/controllers/dashboardController'
import { authenticateToken } from '~/middlewares/auth'
const Router = express.Router()
Router.get('/', authenticateToken, (req, res) => {
  dashboardController.handleGetDashboard(req, res)
}
)
export const APIDashboard = Router