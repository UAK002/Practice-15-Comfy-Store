import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numsItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      //   console.log(action.payload);
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.productID);
      console.log(item);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      console.log(item);
      console.log(state.cartItems);
      state.numsItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
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

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
