import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Feature/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
