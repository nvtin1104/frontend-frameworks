import { GET_DB } from '~/configs/mongodb'
import { ObjectId } from 'mongodb'
const { comparePassword } = require('~/utils/hashPassword')
const { findOne } = require('~/validations/db')

const login = async (email, password) => {
  try {
    const user = await findOne('users', { email: email })
    if (!user) {
      throw new Error('Email not found')
    }
    const validPassword = await comparePassword(password, user.password)
    if (!validPassword) {
      throw new Error('Password is incorrect')
    }
    if (user.status === 'ban') {
      throw new Error('User is banned')
    }
    return user
  }
  catch (error) {
    throw new Error(error)
  }
}
const updateToken = async (id, token) => {
  try {
    const db = await GET_DB()
    await db.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: { token: token } })
    return await db.collection('users').findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
const getUserByEmail = async (email) => {
  try {
    const db = await GET_DB()
    return await db.collection('users').findOne({ email: email })
  } catch (error) {
    throw new Error(error)
  }
}
const updatePassword = async (id, password) => {
  try {
    const db = await GET_DB()
    await db.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: { password: password } })
    return await db.collection('users').findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
export const AuthModel = {
  login,
  updateToken,
  getUserByEmail,
  updatePassword
}