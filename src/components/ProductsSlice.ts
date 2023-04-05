import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { v4 as uuidv4 } from 'uuid'


export interface Product { 
  name: string;
  amount: number;
  id:number;
}

export interface ProductChangePayload {
  name: keyof Product,
  id: number
  value: string
} 

const initialState: Product[] = [
  {name: 'First Shopping Item', amount: 1, id: uuidv4()},
  {name: 'Second Shopping Item', amount: 2, id: uuidv4()},
  {name: 'Third Shopping Item', amount: 3, id: uuidv4()},
  {name: 'Fourth Shopping Item', amount: 4, id: uuidv4()},
  {name: 'Fiveth Shopping Item', amount: 5, id: uuidv4()},
]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      console.log(action)
      state.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return state.filter(product => product.id !== action.payload)
    },
    changeProduct: (state, action: PayloadAction<ProductChangePayload>) => {
      const { id, name, value } = action.payload
      const product = state.find((item) => item.id === Number( id ) );
 
      if( product ){
        product[name] = value
     }
    }
}})

export const { addProduct, removeProduct, changeProduct } = productsSlice.actions;

export const getProductsSelector = (state: RootState) => state.products;

export default productsSlice.reducer;