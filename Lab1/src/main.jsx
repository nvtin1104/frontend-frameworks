import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalContext } from './context.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GlobalContextProvider = ({ children }) => {
    const defaultValue = {
      "name": "Nguyễn Văn Tín",
      "age": "20",
      "address": "Đăk Lăk",
      "email": "nvtin1104@gmail.com",
      "phone": "0905074920",
      "status": "Còn sống"
    }; // Khai báo giá trị mặc định tại đây
    const [globalState, setGlobalState] = React.useState(defaultValue);

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
     <ToastContainer />
    <App />
  </GlobalContextProvider>,
)