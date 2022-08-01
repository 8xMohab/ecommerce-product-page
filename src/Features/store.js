import productSlice from "./product";
import cartSlice from "./cart";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});
export default store;
