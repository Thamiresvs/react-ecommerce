import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import Product from './Product';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
