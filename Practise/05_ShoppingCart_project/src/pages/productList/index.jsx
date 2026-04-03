import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import ProductTile from '../../components/productTile';

export default function ProductList() {
  const { productList, loading, error } = useContext(ShoppingCartContext);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-gray-200 border-t-cyan-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading amazing products...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md px-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Something went wrong</h3>
          <p className="mt-2 text-gray-600">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 mt-6 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );

  return (
    <section className="py-12 bg-linear-to-b from-white to-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our Featured Products
          </h2>
          <div className="w-24 h-0.5 mx-auto mt-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <p className="mt-4 text-base text-gray-500">
            Discover our handpicked collection of premium items
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12 lg:mt-16 gap-y-8 lg:gap-6 lg:grid-cols-4">
          {productList && productList.length > 0 ? (
            productList.map(product => <ProductTile key={product.id} product={product} />)
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </section>
  );
}
