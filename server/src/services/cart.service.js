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
      data.updatedAt = new Date().getTime()
      await cartModel.update({ id: isEsxist._id, data })
      return await getAll(data.userId)

    }
    data.totalPrice = product.price * data.quantity
    await cartModel.add(data)
    return await getAll(data.userId)
  } catch (error) {
    throw new Error(error)
  }
}
const deleteCart = async (id) => {
  const cart = await cartModel.getById({ id })
  if (!cart) {
    throw new Error('Cart not found')
  }
  await cartModel.deleteCart({ id })
  return await getAll(cart.userId)
}
const fetchProductDetails = async (cart) => {
  const product = await productsModel.getOneById(cart.productId)
  if (!product) {
    throw new Error('Product not found')
  }
  return { ...cart, name: product.name, img: product.imgs[0], price: product.price }
}

const getAll = async (id) => {
  const carts = await cartModel.getAll(id);
  if (!carts) {
    throw new Error('Cart not found')
  }
  else {
    return await Promise.all(carts.map(fetchProductDetails))
  }
}
export const CartService = {
  addToCart,
  deleteCart,
  getAll
}