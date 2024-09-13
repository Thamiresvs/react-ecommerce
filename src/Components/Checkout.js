import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

function Checkout({ cartItems, total }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Handle payment
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Card Details</label>
        <CardElement className="border p-2 rounded" />
      </div>
      <button type="submit" disabled={!stripe} className="bg-blue-500 text-white px-4 py-2 rounded">Pay ${total}</button>
    </form>
  );
}

export default Checkout;
