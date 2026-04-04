import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

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

  function handleAddToCart(productDetails) {
    const existingItem = [...cartItems];

    const findIndexOfCurrentItem = existingItem.findIndex(item => item.id === productDetails.id);

    if (findIndexOfCurrentItem === -1) {
      existingItem.push({
        ...productDetails,
        quantity: 1,
        totalPrice: productDetails.price,
      });
    } else {
      existingItem[findIndexOfCurrentItem].quantity += 1;
      existingItem[findIndexOfCurrentItem].totalPrice =
        existingItem[findIndexOfCurrentItem].quantity * existingItem[findIndexOfCurrentItem].price;
    }

    setCartItems(existingItem);
    localStorage.setItem('cartItems', JSON.stringify(existingItem));
    navigate('/cart');
  }

  function handleRemoveFromCart(productDetails, isFullyDelete) {
    const existingItem = [...cartItems];

    const findIndexOfCurrentItem = existingItem.findIndex(item => item.id === productDetails.id);

    if (findIndexOfCurrentItem !== -1) {
      if (isFullyDelete) {
        existingItem.splice(findIndexOfCurrentItem, 1);
      } else {
        existingItem[findIndexOfCurrentItem] = {
          ...existingItem[findIndexOfCurrentItem],
          quantity: existingItem[findIndexOfCurrentItem].quantity - 1,
          totalPrice:
            (existingItem[findIndexOfCurrentItem].quantity - 1) *
            existingItem[findIndexOfCurrentItem].price,
        };
      }
    }

    localStorage.setItem('cartItems', JSON.stringify(existingItem));
    setCartItems(existingItem);
  }

  useEffect(() => {
    fetchProducts();
    setCartItems(JSON.parse(localStorage.getItem('cartItems')) || []);
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
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartProvider, ShoppingCartContext };
