import { StatusCodes } from 'http-status-codes'
import { orderService } from '~/services/order.service'
const handleCreateOrder = async (req, res) => {
  try {
    const { cartIds, payment, address, phone, note, name } = req.body
    const dataOrder = {
      payment: payment || 'cod',
      address,
      phone,
      note: note || '',
      name
    }
    if (!cartIds || cartIds.length === 0) {
      throw new Error('Cart is empty')
    }
    if (!address) {
      throw new Error('Address is required')
    }
    if (!phone) {
      throw new Error('Phone is required')
    }

    const products = await orderService.createOrder(cartIds, dataOrder)
    res.status(StatusCodes.CREATED).json(products)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleGetAllOrder = async (req, res) => {
  try {
    const data = await orderService.getAllOrder()
    res.status(StatusCodes.OK).send(data)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleGetOrderDetail = async (req, res) => {
  try {
    const { id } = req.params
    const data = await orderService.getOrderDetail(id)
    res.status(StatusCodes.OK).send(data)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleGetOrderByUserId = async (req, res) => {
  try {
    const { id } = req.params
    const data = await orderService.getOrderByUserId(id)
    res.status(StatusCodes.OK).send(data)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleUpdateOrder = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await orderService.updateOrder(id, data)
    res.status(StatusCodes.OK).send(result)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
const handleGetDetailCart = async (req, res) => {
  try {
    const { cartIds } = req.body
    const data = await orderService.getDetailCart(cartIds)
    res.status(StatusCodes.OK).send(data)
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }
}
export const orderController = {
  handleCreateOrder,
  handleGetAllOrder,
  handleGetOrderDetail,
  handleGetOrderByUserId,
  handleUpdateOrder,
  handleGetDetailCart
}