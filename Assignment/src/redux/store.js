import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './slices/usersSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['your/action/type'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      ignoredPaths: ['items.dates'],
    },
  }),
});
export default store;
