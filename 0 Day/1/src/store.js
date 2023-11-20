import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/cart/cartSlice';
import userReducer from './Features/user/userSlice';

// console.log(cartReducer);
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});

// console.log(store);
