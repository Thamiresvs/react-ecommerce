import React, { useState, useEffect } from 'react';
import { getProductById } from '../api';

function ProductDetail({ match }) {
  const [product, setProduct] = useState(null);
  const productId = match.params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(productId);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-96 object-cover mb-4" />
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
