import sendRequest from "src/utils/resquest";

const CartService = {
  add: (data) => sendRequest('post', 'cart', data),
  getAll: (userId) => sendRequest('get', `cart/${userId}`),
};

export default CartService;