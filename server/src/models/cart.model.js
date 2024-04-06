const { GET_DB } = require('~/configs/mongodb')
const { ObjectId } = require('mongodb')
const { validateBeforeCreate } = require('~/validations/schema')
const CART_SCHEMA = require('joi').object({
  userId: require('joi').string().required(),
  productId: require('joi').string().required(),
  quantity: require('joi').number().required().min(1),
  totalPrice: require('joi').number().required().min(0),
  createdAt: require('joi').date().timestamp('javascript').default(Date.now),
  updatedAt: require('joi').date().timestamp('javascript').default(null)
})
const add = async (cart) => {
  try {
    const db = await GET_DB()
    const dataValid = await validateBeforeCreate(CART_SCHEMA, cart)
    dataValid.userId = new ObjectId(dataValid.userId)
    dataValid.productId = new ObjectId(dataValid.productId)
    return await db.collection('cart').insertOne(dataValid)
  } catch (error) {
    throw new Error(error)
  }
}
const update = async ({ id, data }) => {
  try {
    const db = await GET_DB()
    data.userId = new ObjectId(data.userId)
    data.productId = new ObjectId(data.productId)
    return await db.collection('cart').updateOne({ _id: new ObjectId(id) }, { $set: data })
  } catch (error) {
    throw new Error(error)
  }
}
const getByUser = async ({ id, userId }) => {
  try {
    const db = await GET_DB()
    return await db.collection('cart').findOne({ productId: new ObjectId(id), userId: new ObjectId(userId) })
  } catch (error) {
    throw new Error(error)
  }
}
const getById = async ({ id }) => {
  try {
    const db = await GET_DB()
    return await db.collection('cart').findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
const deleteCart = async ({ id }) => {
  try {
    const db = await GET_DB()
    return await db.collection('cart').deleteOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}
const getAll = async (id) => {
  try {
    const db = await GET_DB()
    return await db.collection('cart').find({userId: new ObjectId(id)}).toArray()
  }
  catch (error) {
    throw new Error(error)
  }
}
export const cartModel = {
  add,
  getById,
  update,
  deleteCart,
  getByUser,
  getAll
}