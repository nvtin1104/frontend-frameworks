const { GET_DB } = require('~/configs/mongodb')
const { validateBeforeCreate } = require('~/validations/schema')
import { ObjectId } from 'mongodb'
const TAG_CREATE_SCHEMA = require('joi').object({
  name: require('joi').string().required().max(100),
  status: require('joi').string().valid('active', 'inactive').default('active'),
  createdAt: require('joi').date().timestamp('javascript').default(Date.now),
  updatedAt: require('joi').date().timestamp('javascript').default(null)
})
const TAG_UPDATE_SCHEMA = require('joi').object({
  name: require('joi').string().max(100),
  status: require('joi').string().valid('active', 'inactive').default('active'),
  updatedAt: require('joi').date().timestamp('javascript').default(Date.now)
})
const create = async (data) => {
  try {
    const db = await GET_DB()
    const validData = await validateBeforeCreate(TAG_CREATE_SCHEMA, data)
    await db.collection('tags').insertOne(validData)
    return await db.collection('tags').find().toArray()
  } catch (error) {
    throw new Error(error)
  }
}
const getAll = async () => {
  try {
    const db = await GET_DB()
    return await db.collection('tags').find().toArray()
  } catch (error) {
    throw new Error(error)
  }
}
const update = async (id, data) => {
  try {
    const db = await GET_DB()
    const validData = await validateBeforeCreate(TAG_UPDATE_SCHEMA, data)
    await db.collection('tags').updateOne({ _id: new ObjectId(id) }, { $set: validData })
    return await db.collection('tags').findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
const deleteTags = async (id) => {
  try {
    const db = await GET_DB()
    await db.collection('tags').deleteOne({ _id: new ObjectId(id) })
    return db.collection('tags').find().toArray()
  } catch (error) {
    throw new Error(error)
  }
}
export const TagsModel = {
  create,
  getAll,
  update,
  deleteTags
}