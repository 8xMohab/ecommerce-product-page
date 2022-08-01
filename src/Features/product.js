import { createSlice } from "@reduxjs/toolkit";
const exampleProduct = {
  company: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250,
  discount: 0.50,
  image: `${process.env.PUBLIC_URL}/Images/image-product-1.jpg`,
};
const productSlice = createSlice({
  name: "product",
  initialState: { value: exampleProduct },
  reducers: {
    display: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default productSlice.reducer;
