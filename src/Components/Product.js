import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
}

export default Product;
