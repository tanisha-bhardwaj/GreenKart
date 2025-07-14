import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import productReducer from '../features/productSlice';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
  },
});

export default store;

