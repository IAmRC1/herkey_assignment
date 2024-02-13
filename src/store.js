import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});