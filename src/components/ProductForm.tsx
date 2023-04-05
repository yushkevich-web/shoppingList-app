import * as React from 'react';

import { v4 as uuidv4 } from 'uuid'

import { Product, addProduct } from './ProductsSlice';
import { useAppDispatch } from '../store/storeHooks';



const ProductForm: React.FunctionComponent = (props) => {

  const initialProductState = {
    name: '',
    amount: 0,
    id: uuidv4(),
  }
  
  const [product, setProduct] = React.useState<Product>(initialProductState)

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(prev => ( {
      ...prev, 
      [e.target.name]: e.target.value,
    }));
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProduct(product.id = uuidv4())
    dispatch(addProduct(product))
    
    setProduct(initialProductState)
  }


  return (
    <div className='product'>
      <h2 className='product__title'>Add New Products</h2>
      <form className='product__form'>
        <input type="text" placeholder='Name' name='name' value={product.name} onChange={handleChange}/>
        <input type="number" placeholder='Amount' name='amount' value={product.amount} onChange={handleChange}/>
        <button onClick={handleSubmit} className='btn__add'>Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
