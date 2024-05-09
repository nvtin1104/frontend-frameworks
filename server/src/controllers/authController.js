import { createToken } from '~/middlewares/auth'
import { UsersService } from '~/services/users.service'
import { createPassword } from '~/utils/hashPassword'
import { SendMail } from '~/utils/mail'

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
const handleGetOTP = async (req, res) => {
  try {
    const { email } = req.body
    if (!email) throw new Error('Please provide email')
    const user = await AuthService.getUserByEmail(email)
    if (!user) throw new Error('Email not found')
    const OTP = Math.floor(100000 + Math.random() * 900000)
    await SendMail({
      to: email,
      subject: 'OTP',
      text: `Your OTP is ${OTP}`,
      html: `<b>Your OTP is ${OTP}</b>`
    })
    res.status(StatusCodes.OK).json({ OTP, userId: user._id })
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleUpdatePassword = async (req, res) => {
  try {
    const { id, password } = req.body
    if (!id || !password) throw new Error('Please provide id and password')
    const newPassword = await createPassword(password)
    const data = await AuthService.updatePassword({ id, password: newPassword })
    res.status(StatusCodes.OK).json(data)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleLoginWithGG = async (req, res) => {
  try {
    const { email, name, avatar, accessToken } = req.body
    if (!email || !name || !avatar || !accessToken ) throw new Error('Please provide email and name')
    const isEsist = await AuthService.getUserByEmail(email)
    if (isEsist) {
      const token = await createToken({ id: isEsist._id, email: isEsist.email, role: isEsist.role })
      const data = await AuthService.updateToken(isEsist._id, token)
      return res.status(StatusCodes.OK).json(data)
    }
    else {
      const data = {
        email: email,
        name: name,
        avatar: avatar
      }
      data.password = await createPassword(accessToken)
      const users = await UsersService.createUser(data)
      const token = await createToken({ id: users._id, email: users.email, role: users.role })
      const dataToken = await AuthService.updateToken(users._id, token)
      res.status(StatusCodes.OK).json(dataToken)
    }

  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
export const authController = {
  handleLogin,
  handleGetOTP,
  handleUpdatePassword,
  handleLoginWithGG
}