import { createContext, useEffect, useState } from 'react';

const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProductList(data.products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        productList,
        loading,
        error,
        productDetails,
        setProductDetails,
        setLoading,
        setError,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
