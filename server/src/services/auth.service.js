const { AuthModel } = require('~/models/auth.model')

const login = async (email, password) => await AuthModel.login(email, password)
const updateToken = async (id, token) => await AuthModel.updateToken(id, token)
export const AuthService = {
  login,
  updateToken
}