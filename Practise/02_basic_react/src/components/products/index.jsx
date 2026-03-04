import { useState } from 'react';
import ProductItem from './components/product-item';
import './style.css';
const dummyProductData = [
  { name: 'Product 1', price: 100 },
  { name: 'Product 2', price: 200 },
  { name: 'Product 3', price: 300 },
  { name: 'Product 4', price: 400 },
];

function ProductList() {
  const [flag, setFlag] = useState(true);
  function handleFlagChange() {
    setFlag(!flag);
  }
  return (
    <div className="product-list">
      <button onClick={handleFlagChange}>Ecommerce Project</button>
      {flag && (
        <>
          {dummyProductData.map(product => (
            <ProductItem data={product} key={product.price} />
          ))}
        </>
      )}
    </div>
  );
}

export default ProductList;
