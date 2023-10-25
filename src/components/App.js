import logo from '../assets/logo-lmj.png'
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer'
import '../styles/Layout.css'
import { useState, useEffect } from 'react';

function App() {
  const [cart, updateCart] = useState([]);

  useEffect(() => {
    localStorage.setItem(JSON.stringify(cart))}
    , [cart])

  return (
    <div>
      <Banner >
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison Jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
