import { ObjectId } from 'mongodb'
import { GET_DB } from '~/configs/mongodb'

export const findOneById = async (collection, id) => {
    const db = await GET_DB()
    return await db.collection(collection).findOne({ _id: new ObjectId(id) })
}
export const findMany = async (collection, query) => {
    const db = await GET_DB()
    return await db.collection(collection).find(query).toArray()
}
export const findOne = async (collection, query) => {
    const db = await GET_DB()
    return await db.collection(collection).findOne(query)
}