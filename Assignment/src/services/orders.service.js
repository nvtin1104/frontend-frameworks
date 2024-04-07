import sendRequest from "src/utils/resquest";

const OrdersService = {
  create: (data) => sendRequest('post', 'orders', data),
  getAll: (userId) => sendRequest('get', `orders/user/${userId}`),
  delete: (id) => sendRequest('delete', `cart/${id}`),
};

export default OrdersService;