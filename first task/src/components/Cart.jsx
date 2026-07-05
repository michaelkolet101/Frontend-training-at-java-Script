import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import productsData from '../data/prodacts.json';

function Cart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');

    if (id) {
      const productToAdd = productsData.find((item) => String(item.id) === id);

      if (productToAdd) {
        const updatedCart = existingCart.some((item) => item.id === productToAdd.id)
          ? existingCart.map((item) =>
              item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...existingCart, { ...productToAdd, quantity: 1 }];

        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
      }

      navigate('/cart', { replace: true });
      return;
    }

    setCartItems(existingCart);
  }, [id, navigate]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleRemoveItem(itemId) {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }

  return (
    <div style={{ padding: '1.5rem' }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <>
          <p>Your cart is currently empty.</p>
          <Link to="/products">Continue shopping</Link>
        </>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                <strong>{item.name}</strong> — {item.quantity} × ${item.price.toFixed(2)}{' '}
                <button
                  type="button"
                  onClick={() => handleRemoveItem(item.id)}
                  style={{ marginLeft: '0.75rem', padding: '0.35rem 0.75rem' }}
                >
                  הסר מהעגלה
                </button>
              </li>
            ))}
          </ul>
          <p>
            <strong>Total:</strong> ${totalPrice.toFixed(2)}
          </p>
          <Link to="/products">Continue shopping</Link>
        </>
      )}
    </div>
  );
}

export default Cart;
