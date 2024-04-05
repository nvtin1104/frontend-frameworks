import { createToken } from '~/middlewares/auth'

const { StatusCodes } = require('http-status-codes')
const { AuthService } = require('~/services/auth.service')

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) throw new Error('Please provide email and password')
    const user = await AuthService.login(email, password)
    const token = await createToken({ id: user._id, email: user.email, role: user.role })
    const data = await AuthService.updateToken(user._id, token)
    res.status(StatusCodes.OK).json(data)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}

export const authController = {
  handleLogin
}