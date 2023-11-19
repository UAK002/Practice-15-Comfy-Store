import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
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
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      state.order = state.cartTotal + state.tax + state.shipping;

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

// - cartSlice.jsx > reducer addItem>
// 1. state.numItemsCart += product.amount

// - cartSlice.jsx > reducer addItem>
// 1. state.cartTotal += product.price * product.amount
// 2. state.tax = 0.1 * state.cartTotal
// 3. state.oderTotal = state.cartTotal + state.shipping + state.tax

// - cartSlice.jsx > reducer addItem>
// 1. localStorage.setItem("cart", JSON.stringify(state))

// - cartSlice.jsx > reducer addItem>
// 1. toast.success("item added to cart")

// > to check the toast > click "ADD TO BAG" >
// > to check > redux dev tools > under "State" > cartItems array > we can see on item
// > to check > add more items by increasing amount and change the product color and click "ADD TO BAG" >
// > redux dev tools > under "State" > cartItems array > we can see 2 item in cartItem
// > dev tools > network tools > we have the saved info for cart
