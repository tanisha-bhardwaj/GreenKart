import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Tomato', category: 'vegetables', price: 10 },
    { id: 2, name: 'Apple', category: 'fruits', price: 20 },
    { id: 3, name: 'Rose', category: 'flowers', price: 15 },
    { id: 4, name: 'Potato', category: 'vegetables', price: 8 },
    { id: 5, name: 'Banana', category: 'fruits', price: 12 },
    { id: 6, name: 'Lily', category: 'flowers', price: 25 }
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;