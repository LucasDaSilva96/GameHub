import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
