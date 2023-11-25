import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Feature/cart/cartSlice';
import userReducer from './Feature/user/userSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
