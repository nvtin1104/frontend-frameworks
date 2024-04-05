const jwt = require('jsonwebtoken')
import { env } from '~/configs/environment'
import { StatusCodes } from 'http-status-codes';
export const createToken = ({ id, email, role }) => {
  return jwt.sign({ id, email, role }, env.TOKEN_SECRET, {
    expiresIn: 60 * 60 * 24 * 30
  })
}
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' })

  jwt.verify(token, env.TOKEN_SECRET, function (err, user) {
    if (err) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: 'Unauthorized' })
    }

    req.user = user

    next()
  })

}