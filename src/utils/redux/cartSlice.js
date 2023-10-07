import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCartItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCartItem: (state) => {
      state.items.length === 0;
    },
  },
});

export const { addCartItem, removeCartItem, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;
