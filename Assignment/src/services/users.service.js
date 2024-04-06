import sendRequest from "src/utils/resquest";

const UsersService = {
  getAll: () => sendRequest('get', 'users'),
  getMe: () => sendRequest('post', 'users/get'),
};

export default UsersService;