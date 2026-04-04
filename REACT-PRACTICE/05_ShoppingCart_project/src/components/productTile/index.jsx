import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

export default function ProductTile({ product }) {
  const navigate = useNavigate();

  function handleNavigateToDetailsPage(currentProductID) {
    navigate(`/product-details/${currentProductID}`);
  }

  const { handleAddToCart, cartItems } = useContext(ShoppingCartContext);

  return (
    <div className="relative group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cyan-200">
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {product?.title}
            </p>
          </div>
          <div className="shrink-0">
            <p className="text-sm font-bold text-cyan-600 sm:text-base">${product?.price}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <button
            onClick={() => {
              handleNavigateToDetailsPage(product?.id);
            }}
            className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            View Details
          </button>
          <button
            onClick={() => {
              handleAddToCart(product);
            }}
            disabled={cartItems.findIndex(item => item.id === product.id) > -1}
            className="w-full px-4 py-2.5 text-sm font-medium text-white bg-linear-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
