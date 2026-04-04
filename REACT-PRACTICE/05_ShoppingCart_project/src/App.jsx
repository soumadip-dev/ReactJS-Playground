import { Route, Routes } from 'react-router';
import ProductList from './pages/productList';
import ProductDetails from './pages/productDetails';
import CartList from './pages/cartList';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </>
  );
}
