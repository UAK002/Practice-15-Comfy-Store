import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/cart/cartSlice';

// console.log(cartReducer);
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});

// console.log(store);
