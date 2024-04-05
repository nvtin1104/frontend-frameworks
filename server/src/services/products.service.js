const { productsModel } = require('~/models/products.model')

const createProduct = async (product) => await productsModel.create(product)
const getAllProducts = async () => await productsModel.getAll()
const getProductById = async (id) => await productsModel.getOneById(id)
const deleteProductById = async (id) => await productsModel.deleteById(id)
export const ProductsService = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById
}
