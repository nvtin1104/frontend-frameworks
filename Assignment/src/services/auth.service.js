import sendRequest from "../utils/resquest";

const AuthService = {
    login: (data) => sendRequest('post', 'auth/login', data),
    register: (data) => sendRequest('post', 'users', data),
};
export default AuthService;