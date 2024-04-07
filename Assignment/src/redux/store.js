import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import usersReducer from './slices/usersSlice';
import ordersReducer from './slices/ordersSlice';
import productsReducer from './slices/productsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  }
});
export default store;
