import { cartModel } from '~/models/cart.model'
import { orderModel } from '~/models/order.model'
import { productsModel } from '~/models/products.model'

const createOrder = async (cartIds, dataOrder) => {
  let dataCreate = {
    total: 0
  }
  let products = []

  await Promise.all(cartIds.map(async (cartId) => {
    let product = {
      price: 0
    }
    const cart = await cartModel.getById({ id: cartId })
    if (!cart) {
      throw new Error('Cart not found')
    }
    const dataProduct = await productsModel.getOneById(cart.productId)
    product.productId = dataProduct._id
    product.productName = dataProduct.name
    product.productImg = dataProduct.imgs[0]
    product.quantity = cart.quantity
    product.price += cart.totalPrice
    dataCreate.total += product.price
    dataCreate.userId = cart.userId
    products.push(product)
    await cartModel.deleteCart({ id: cartId })
  }))
  dataCreate.products = products
  dataCreate = { ...dataCreate, ...dataOrder }
  return await orderModel.add(dataCreate)
}
const getDetailCart = async (cartIds) => {
    return Promise.all(cartIds.map(async (cartId) => {
    const cart = await cartModel.getById({ id: cartId })
    if (!cart) {
      throw new Error('Cart not found')
    }
    const dataProduct = await productsModel.getOneById(cart.productId)
    cart.product = dataProduct
    return cart
  }))
}
const getAllOrder = async () => await orderModel.getAll()
const getOrderDetail = async (id) => await orderModel.getById(id)
const getOrderByUserId = async (userId) => await orderModel.getByUserId(userId)
const updateOrder = async (id, data) => {
  const order = await orderModel.getById(id)
  if (!order) {
    throw new Error('Order not found')
  }
  return await orderModel.update(id, data)
}
export const orderService = {
  createOrder,
  getAllOrder,
  getOrderDetail,
  getOrderByUserId,
  updateOrder,
  getDetailCart
}