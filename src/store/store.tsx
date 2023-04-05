import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import products from '../components/ProductsSlice';

const store = configureStore({
  reducer: {
    products
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;