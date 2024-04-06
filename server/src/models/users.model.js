
import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/configs/mongodb'
import { validateBeforeCreate } from '~/validations/schema'

const USER_SCHEMA = Joi.object({
  name: Joi.string().required().max(100),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(60),
  avatar: Joi.string().max(256).default('https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png'),
  gender: Joi.string().valid('male', 'female', 'other').default('other'),
  role: Joi.string().valid('ADMIN', 'USER').default('USER'),
  phone: Joi.string().max(10).default(null),
  address: Joi.string().max(256).default(null),
  status: Joi.string().valid('active', 'ban').default('active'),
  token: Joi.string().max(256).default(null),
  activeAt: Joi.date().timestamp('javascript').default(null),
  birthday: Joi.date().timestamp('javascript').default(null),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null)
})
const USER_UPDATE_SCHEMA = Joi.object({
  name: Joi.string().max(100),
  email: Joi.string().email().max(100),
  password: Joi.string().max(60),
  avatar: Joi.string().max(256).default('https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png'),
  gender: Joi.string().valid('male', 'female', 'other').default('other'),
  role: Joi.string().valid('ADMIN', 'USER').default('USER'),
  phone: Joi.string().max(10).default(null),
  address: Joi.string().max(256).default(null),
  status: Joi.string().valid('active', 'ban').default('active'),
  activeAt: Joi.date().timestamp('javascript').default(null),
  token: Joi.string().max(256),
  birthday: Joi.date().timestamp('javascript').default(null),
  updatedAt: Joi.date().timestamp('javascript').default(Date.now)
})

const addUser = async (data) => {
  try {
    const validData = await validateBeforeCreate(USER_SCHEMA, data)
    const db = await GET_DB()
    return await db.collection('users').insertOne(validData)

  } catch (error) {
    throw new Error(error)
  }
}
const getAll = async () => {
  try {
    const db = await GET_DB()
    return await db.collection('users').find({}).toArray()
  } catch (error) {
    throw new Error(error)
  }
}
const updateUser = async (id, data) => {
  try {
    const db = await GET_DB()
    const validData = await validateBeforeCreate(USER_UPDATE_SCHEMA, data)
    validData.birthday = new Date(validData.birthday).getTime()
    return await db.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: validData })
  }
  catch (error) {
    throw new Error(error)
  }
}
const deleteUser = async (id) => {
  try {
    const db = await GET_DB()
    return await db.collection('users').deleteOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
const getUserById = async (id) => {
  try {
    const db = await GET_DB()
    return await db.collection('users').findOne({ _id: new ObjectId(id) })
  }
  catch (error) {
    throw new Error(error)
  }}
const getUserByToken = async (token) => {
  try {
    const db = await GET_DB()
    return await db.collection('users').findOne({ token: token })
  }
  catch (error) {
    throw new Error(error)
  }}
export const usersModel = {
  addUser,
  getAll,
  getUserById,
  updateUser,
  deleteUser,
  getUserByToken
}