import ProductItem from './components/product-item';
import './style.css';
const dummyProductData = [
  { name: 'Product 1', price: 100 },
  { name: 'Product 2', price: 200 },
  { name: 'Product 3', price: 300 },
  { name: 'Product 4', price: 400 },
];

function ProductList() {
  const flag = false;
  return (
    <div className="product-list">
      <h3>{flag === true ? <>Ecommerce Project</> : <>Ecommerce App</>}</h3>

      {dummyProductData.map(product => (
        <ProductItem data={product} key={product.price} />
      ))}
    </div>
  );
}

export default ProductList;
