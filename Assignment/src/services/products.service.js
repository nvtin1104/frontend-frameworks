import sendRequest from "src/utils/resquest";

const ProductsSerice = {
  getAll: () => sendRequest('get', 'products'),
};

export default ProductsSerice;