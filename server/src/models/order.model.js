import { GET_DB } from '~/configs/mongodb'
import { validateBeforeCreate } from '~/validations/schema'
import { ObjectId } from 'mongodb'
const ORDER_SCHEMA = require('joi').object({
  userId: require('joi').required(),
  name: require('joi').string().required().max(50),
  products: require('joi').array().items(require('joi').object().keys({
    productId: require('joi').required(),
    productName: require('joi').string().required(),
    productImg: require('joi').string().required(),
    quantity: require('joi').number().required(),
    price: require('joi').number().required()
  })).required(),
  total: require('joi').number().required(),
  address: require('joi').string().required().max(255),
  phone: require('joi').string().required().max(10).min(10),
  note: require('joi').string().allow('').default('').max(255),
  payment: require('joi').string().valid('cod', 'vnpay').default('cod'),
  status: require('joi').string().valid('pending', 'completed', 'cancelled', 'shipping', 'created', 'paymented').default('created'),
  createdAt: require('joi').date().timestamp('javascript').default(Date.now),
  updatedAt: require('joi').date().timestamp('javascript').default(null)
})
const ORDER_UPDATE_SCHEMA = require('joi').object({
  status: require('joi').string().valid('pending', 'completed', 'cancelled', 'shipping', 'created', 'paymented'),
  updatedAt: require('joi').date().timestamp('javascript').default(Date.now),
  address: require('joi').string(),
  phone: require('joi').string().max(10).min(10),
  note: require('joi').string().allow('')
})
const add = async (order) => {
  try {
    const db = await GET_DB()
    const dataValid = await validateBeforeCreate(ORDER_SCHEMA, order)
    dataValid.userId = new ObjectId(dataValid.userId)
    return await db.collection('orders').insertOne(dataValid)
  } catch (error) {
    throw new Error(error)
  }
}
const getAll = async () => {
  try {
    const db = await GET_DB()
    return await db.collection('orders').find().toArray()
  } catch (error) {
    throw new Error(error)
  }
}
const getById = async (id) => {
  try {
    const db = await GET_DB()
    return await db.collection('orders').findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
const getByUserId = async (userId) => {
  try {
    const db = await GET_DB()
    return await db.collection('orders').find({ userId: new ObjectId(userId) }).toArray()
  } catch (error) {
    throw new Error(error)
  }
}
const update = async (id, data) => {
  try {
    const db = await GET_DB()
    const validData = await validateBeforeCreate(ORDER_UPDATE_SCHEMA, data)
    return await db.collection('orders').updateOne({ _id: new ObjectId(id) }, { $set: validData })
  } catch (error) {
    throw new Error(error)
  }
}
export const orderModel = {
  add,
  getAll,
  getById,
  getByUserId,
  update
}