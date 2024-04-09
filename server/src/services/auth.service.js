const { AuthModel } = require('~/models/auth.model')

const login = async (email, password) => await AuthModel.login(email, password)
const updateToken = async (id, token) => await AuthModel.updateToken(id, token)
const getUserByEmail = async (email) => await AuthModel.getUserByEmail(email)
const updatePassword = async ({ id, password }) => await AuthModel.updatePassword(id, password)
export const AuthService = {
  login,
  updateToken,
  getUserByEmail,
  updatePassword
}