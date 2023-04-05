import './App.scss'
import Product from './components/ShoppingList'
import ProductForm from './components/ProductForm'
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <Provider store={store}> 
      <div className="App">
        <header className="header">
          <div className="header__logo">Logo</div>
          <h1 className="header__title">Shopping List</h1>
        </header>

        <Product />

        <ProductForm />
      </div>
    </Provider>
  )
}

export default App;
