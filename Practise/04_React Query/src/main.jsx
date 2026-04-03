import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import Products from './pages/Products.jsx';
import Product from './pages/Product.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProductsAdvanced from './pages/ProductsAdvanced.jsx';

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:productId',
    element: <Product />,
  },
  {
    path: 'paginated',
    element: <ProductsAdvanced />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
