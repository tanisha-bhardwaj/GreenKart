// src/features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item: { name, category, quantity }
  count: 0, // total item count in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { name, category, price } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, category, quantity: 1, price  });
      }

      state.count += 1; // ✅ Redux-safe count update
    },

    removeFromCart: (state, action) => {
      const { name, category} = action.payload;
      if(state.items.find((item) => item.name === name).quantity > 0) {
        state.items.find((item) => item.name === name).quantity -= 1;
        state.count -= 1;
      }
     // state.count != 0 ? state.count -= 1 : 0;
      // state.items = state.items.filter(
      //   (item) => item.name !== name 
      // );
    },

    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
