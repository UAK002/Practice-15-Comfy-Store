import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};
// console.log(defaultState);

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      // console.log(action.payload);
      const { product } = action.payload;
      console.log(product);
      const item = state.cartItems.find((i) => i.cartID === product.id);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsCart += product.amount;
      state.cartTotal = product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('item added to cart');
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
});
// console.log(cartSlice.actions);
// console.log(cartSlice.reducer);

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
