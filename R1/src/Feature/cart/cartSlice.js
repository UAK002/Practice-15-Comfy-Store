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

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
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

      cartSlice.caseReducers.calculateTotals(state);

      toast.success('item added to cart');
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.order = state.cartTotal + state.tax + state.shipping;

      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;

// > to check > Application tool > clear all thing from localStorage
// > to add item in cart > select amount 5 > click "add to bag"
// > we can see the cart-icon displaying 5
// > once we refresh page the value persists
// > check > redux dev tool > we can "numItemsInCart" equal to 5

// - cartSlice.jsx > cartSlice > W { } of reducers property
// 1. create a new reducer calculateTotals = ( )=>{ }
// 2. W function cut and paste below lines of code:

//     calculateTotals: () => {
//       state.tax = 0.1 * state.cartTotal;
//       state.orderTotal = state.cartTotal + state.shipping + state.tax;
//       localStorage.setItem('cart', JSON.stringify(state));

//       - cartSlice.jsx > cartSlice > in addItem reducer
// 1. to access the calculateTotal give below code:
// cartSlice.caseReducers.calculateTotals

// - cartSlice.jsx > cartSlice > in addItem reducer
// 1. change the code – pass the argument
// cartSlice.caseReducers.calculateTotals(state)

// - cartSlice.jsx > cartSlice > in calculateTotal
// 1. pass parameter state in the function of calculateTotals

// > to check > Application tool > clear all thing from localStorage
// > refresh the page
// > to add item in cart > select amount 3 > click "add to bag"
// > to add more items in cart > select amount 10 > select different color> click "add to bag"
// > we can see the cart-icon displaying 13
// > in localStorage we can see 2 items in the cart
// > once we refresh page the value persists
