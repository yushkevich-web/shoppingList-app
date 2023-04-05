import * as React from 'react';
import { useSelector } from 'react-redux';
import { getProductsSelector, removeProduct, changeProduct } from './ProductsSlice';
import { useAppDispatch } from '../store/storeHooks';



const ShoppingList: React.FC = () => {

  const products = useSelector(getProductsSelector)   
  const dispatch = useAppDispatch()

  const handleRemove = (id:number) => {
    dispatch(removeProduct(id))
  }

  const handleChange = (id, name, value) => {
    dispatch(changeProduct({id, name, value}))
  }


  return (
    <div className='shopping'>
      {products.map(item => 
        <div key={item.id} className='shopping__item'>
          <input 
            type="text" 
            placeholder='Name' 
            id={item.id}
            // name={'name'}
            value={item.name} 
            onChange={( event ) => handleChange(item.id, 'name', event.target.value)}
          />
          <input 
            type="number" 
            id={item.id}
            // name={'amount'}
            placeholder='Amount' 
            value={item.amount} 
            onChange={( event ) => handleChange(item.id, 'amount', event.target.value)}
          />
          <button 
            className='btn__remove' 
            onClick={() => handleRemove(item.id)}
          >Remove</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
