import { validateBeforeCreate } from '~/validations/schema'
import { ObjectId } from 'mongodb'
const { GET_DB } = require('~/configs/mongodb')
const PRODUCTS_SCHEMA = require('joi').object({
  name: require('joi').string().required().max(100),
  price: require('joi').number().required().min(0),
  description: require('joi').string().required().max(256),
  status: require('joi').string().valid('active', 'inactive').default('active'),
  imgs: require('joi').array().required(),
  tags: require('joi').array().required(),
  createdAt: require('joi').date().timestamp('javascript').default(Date.now),
  updatedAt: require('joi').date().timestamp('javascript').default(null)
})
const PRODUCTS_UPDATE_SCHEMA = require('joi').object({
  name: require('joi').string().required().max(100),
  price: require('joi').number().required().min(0),
  description: require('joi').string().required().max(256),
  status: require('joi').string().valid('active', 'inactive').default('active'),
  imgs: require('joi').array().required(),
  tags: require('joi').array().required(),
  updatedAt: require('joi').date().timestamp('javascript').default(Date.now)
})
const create = async (product) => {
  try {
    const db = await GET_DB()
    const dataValid = await validateBeforeCreate(PRODUCTS_SCHEMA, product)
    return await db.collection('products').insertOne(dataValid)
  } catch (error) {
    throw new Error(error)
  }
}
const getAll = async () => {
  try {
    const db = await GET_DB()
    return await db.collection('products').find({}).toArray()
  } catch (error) {
    throw new Error(error)
  }
}
const getOneById = async (id) => {
  try {
    const db = await GET_DB()
    return await db.collection('products').findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
const deleteById = async (id) => {
  try {
    const db = await GET_DB()
    const product = await getOneById(id)
    if (!product) {
      throw new Error('Product not found')
    }
    return await db.collection('products').deleteOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
const update = async (id, product) => {
  try {
    const db = await GET_DB()
    const dataValid = await validateBeforeCreate(PRODUCTS_UPDATE_SCHEMA, product)
    return await db.collection('products').updateOne({ _id: new ObjectId(id) }, { $set: dataValid })
  } catch (error) {
    throw new Error(error)
  }
}
export const productsModel = {
  create,
  getAll,
  getOneById,
  deleteById,
  update
}