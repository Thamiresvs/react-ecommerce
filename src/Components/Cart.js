import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, onRemove, onCheckout }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center border-b p-2">
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button onClick={() => onRemove(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/checkout">
        <button onClick={onCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
