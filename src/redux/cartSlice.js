import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearItem(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItem,
} = cartSlice.actions;

export const getCart = (state) => state.cart;
export const getTotalCartQuantity = (state) => {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
};
export function getTotalCartPrice(state) {
  return state.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartItem(state, id) {
  return state.find((item) => item.id === id);
}
export default cartSlice.reducer;
