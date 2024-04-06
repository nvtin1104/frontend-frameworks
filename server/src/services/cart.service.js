import { cartModel } from '~/models/cart.model'
import { productsModel } from '~/models/products.model'

const addToCart = async (data) => {
  try {
    const isEsxist = await cartModel.getByUser({ id: data.productId, userId: data.userId })
    const product = await productsModel.getOneById(data.productId)
    if (!product) {
      throw new Error('Product not found')
    }
    if (isEsxist) {
      data.quantity += isEsxist.quantity
      data.totalPrice = product.price * data.quantity
      return await cartModel.update({ id: isEsxist._id, data })
    }
    data.totalPrice = product.price * data.quantity
    return await cartModel.add(data)
  } catch (error) {
    throw new Error(error)
  }
}
const deleteCart = async (id) => {
  const cart = await cartModel.getById({ id })
  if (!cart) {
    throw new Error('Cart not found')
  }
  return await cartModel.deleteCart({ id })
}
const getAll = async (id) => await cartModel.getAll(id)
export const CartService = {
  addToCart,
  deleteCart,
  getAll,
}