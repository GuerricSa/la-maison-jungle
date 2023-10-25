import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({cart, updateCart}) {
  const [isOpen, setIsOpen] = useState(false)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
  }, [total])

  return isOpen ? (
    <div className='lmj-cart'>
      <button
        onClick={() => setIsOpen(false)}
        className='lmj-cart-toggle-button'
      >
        fermer le panier
      </button>
      <h2>Panier</h2>
      {cart.map(({name, price, amount}, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ x {amount}
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>
        Vider le panier
      </button>
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button
        onClick={() => setIsOpen(true)}
        className='lmj-cart-toggle-button'
        >
        ouvrir le panier
      </button>
    </div>
  )
}

export default Cart;
