import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

export default function CartTile({ cartItem }) {
  const { handleAddToCart, handleRemoveFromCart } = useContext(ShoppingCartContext);

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-3 sm:p-4">
      <div className="flex flex-col sm:grid sm:grid-cols-3 items-start gap-4">
        <div className="flex items-start gap-4 sm:col-span-2 w-full">
          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
            <img
              src={cartItem?.thumbnail}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              alt={cartItem?.title}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
              {cartItem?.title}
            </h3>
            <button
              onClick={() => {
                handleRemoveFromCart(cartItem, true);
              }}
              className="mt-2 sm:mt-3 text-xs sm:text-sm text-red-600 hover:text-red-700 font-medium transition-colors duration-200 flex items-center gap-1"
            >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
              Remove
            </button>
          </div>
        </div>

        <div className="w-full sm:text-right mt-3 sm:mt-0">
          <h3 className="text-base sm:text-lg font-bold text-cyan-600">
            ${cartItem?.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">
            Quantity: {cartItem?.quantity}
          </p>
          <div className="mt-2 sm:mt-3 flex items-center justify-start sm:justify-end gap-2">
            <button
              onClick={() => {
                handleRemoveFromCart(cartItem, false);
              }}
              disabled={cartItem?.quantity === 1}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-cyan-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              -
            </button>
            <span className="w-6 sm:w-8 text-center text-xs sm:text-sm font-medium text-gray-700">
              {cartItem?.quantity}
            </span>
            <button
              onClick={() => {
                if (cartItem?.quantity < 10) handleAddToCart(cartItem);
              }}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-cyan-200 transition-all duration-200 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
