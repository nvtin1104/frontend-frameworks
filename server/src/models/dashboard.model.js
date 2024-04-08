const { GET_DB } = require('~/configs/mongodb')

const getDashboard = async () => {
  try {
    const db = await GET_DB()
    return await db.collection('orders').find({}).toArray()
  } catch (err) {
    throw new Error(err)
  }
}
export const dashboardModel = {
  getDashboard
}