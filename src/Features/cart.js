import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.value = [...state.value, payload];
    },
    removeProduct: (state, { payload }) => {
      state.value = payload;
    },
    clearCart: (state, action) => {
      state.value = [];
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
