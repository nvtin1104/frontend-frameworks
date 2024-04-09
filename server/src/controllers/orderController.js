import { StatusCodes } from 'http-status-codes'
import { orderService } from '~/services/order.service'
import { UsersService } from '~/services/users.service'
import { SendMail } from '~/utils/mail'
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
    const header = req.headers.authorization;
    const token = header.split(' ')[1];
    if (!cartIds || cartIds.length === 0) {
      throw new Error('Cart is empty')
    }
    if (!address) {
      throw new Error('Address is required')
    }
    if (!phone) {
      throw new Error('Phone is required')
    }

    const orders = await orderService.createOrder(cartIds, dataOrder)
    const user = await UsersService.getUserByToken(token)
    await SendMail({
      to: user.email,
      subject: 'Order',
      text: `Your order is created`,
      html: `<div>
      <b>Your order is created</b>
      <br>
      <p>Order ID: ${orders._id}</p>
      <p>Payment: ${orders.payment}</p>
      <p>Address: ${orders.address}</p>
      <p>Phone: ${orders.phone}</p>
      <p>Total: ${orders.total}</p>
      <p>Note: ${orders.note}</p>
      </div>`
    });
    res.status(StatusCodes.CREATED).json({ orders })
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