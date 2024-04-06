import { usersModel } from '~/models/users.model'
import { findMany, findOneById } from '~/validations/db'
const getAllUsers = async () => {
  try {
    const users = await usersModel.getAll()
    return users
  } catch (error) {
    throw new Error(error)
  }
}
const createUser = async (user) => {
  const emailExist = await findMany('users', { email: user.email })
  if (emailExist.length > 0) {
    throw new Error('Email already exists')
  }
  else {
    return await usersModel.addUser(user)
  }
}
const deleteUser = async (id) => {
  const user = await findOneById('users', id)
  if (!user) {
    throw new Error('User not found')
  }
  return await usersModel.deleteUser(id)

}
const getUserById = async (id) => await usersModel.getUserById(id)
const updateUser = async (id, data) => await usersModel.updateUser(id, data)
const getUserByToken = async (token) => await usersModel.getUserByToken(token)
export const UsersService = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByToken
}