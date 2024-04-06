import { StatusCodes } from 'http-status-codes'
import { CartService } from '~/services/cart.service'
const handleAddToCart = async (req, res) => {
    try {
        const product = req.body
        const products = await CartService.addToCart(product)
        res.status(StatusCodes.CREATED).json(products)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}
const handleDeleteCart = async (req, res) => {
    try {
        const { id } = req.params
        const data = await CartService.deleteCart(id)
        res.status(StatusCodes.CREATED).send({ message: 'Delete success'})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}
const handleGetAllCart = async (req, res) => {
    try {
        const id = req.params
        const data = await CartService.getAll(id)
        res.status(StatusCodes.OK).send(data)
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
    }
}
export const cartController = {
    handleAddToCart,
    handleDeleteCart,
    handleGetAllCart
}
