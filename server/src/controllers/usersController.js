import { StatusCodes } from 'http-status-codes'
import { createToken } from '~/middlewares/auth'
import { UsersService } from '~/services/users.service'
import { comparePassword, createPassword } from '~/utils/hashPassword'
const getAllUsers = async (req, res) => {
  try {
    const users = await UsersService.getAllUsers()
    res.status(StatusCodes.CREATED).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const createUser = async (req, res) => {
  try {
    const data = req.body
    data.password = await createPassword(data.password)
    const users = await UsersService.createUser(data)
    if (!users) throw new Error('User not created')
    else {
      res.status(StatusCodes.CREATED).json(users)
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const users = await UsersService.updateUser(id, data)
    res.status(StatusCodes.CREATED).json(users)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const users = await UsersService.deleteUser(id)
    res.status(StatusCodes.CREATED).json(users)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const users = await UsersService.getUserById(id)
    res.status(StatusCodes.CREATED).json(users)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const getUserByToken = async (req, res) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const user = await UsersService.getUserByToken(token)
    res.status(StatusCodes.CREATED).json(user)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleUpdatePassword = async (req, res) => {
  try {
    const { id } = req.params
    const { password, oldPassword } = req.body
    if (!oldPassword) throw new Error('Old password is required')// Add a semicolon at the end of this line
    if (!password) throw new Error('Password is required')// Add a semicolon at the end of this line
    const user = await UsersService.getUserById(id)
    if (!user) throw new Error('User not found')
    const validPassword = await comparePassword(oldPassword, user.password)
    if (!validPassword) throw new Error('Old password is incorrect')// Add a semicolon at the end of this line
    const newPassword = await createPassword(password)
    await UsersService.updateUser(id, { password: newPassword })
    res.status(StatusCodes.CREATED).json({ message: 'Password updated successfully' })
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
export const usersController = {
  getAllUsers,
  createUser,
  updateUser,
  handleUpdatePassword,
  deleteUser,
  getUserById,
  getUserByToken
}