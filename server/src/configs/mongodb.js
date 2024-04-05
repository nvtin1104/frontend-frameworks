import { env } from './environment'

const { MongoClient, ServerApiVersion } = require('mongodb')

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

let dbInstance = null
export const CONNECT_DB = async () => {
  await client.connect()
  dbInstance = client.db('learning_api')
}
export const GET_DB = () => {
  if (!dbInstance) throw new Error('Must connect to Database first')
  return dbInstance
}

export const CLOSE_DB = async () => {
  await client.close()
}
