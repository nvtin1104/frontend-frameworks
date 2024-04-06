import sendRequest from "src/utils/resquest";

const UsersService = {
  getAll: () => sendRequest('get', 'users'),
};

export default UsersService;