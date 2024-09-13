import React, { useState } from 'react';
import Cart from '../Components/Cart';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Handle checkout process
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <Cart cartItems={cartItems} onRemove={handleRemove} onCheckout={handleCheckout} />
    </div>
  );
}

export default CartPage;
