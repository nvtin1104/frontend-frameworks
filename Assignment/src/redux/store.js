import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import usersReducer from './slices/usersSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
  }
});
export default store;
