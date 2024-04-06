import sendRequest from "../utils/resquest";

const AuthService = {
    login: (data) => sendRequest('post', 'auth/login', data),
};
export default AuthService;