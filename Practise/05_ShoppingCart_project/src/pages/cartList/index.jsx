import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import CartTile from '../../components/cartTile';
import { useNavigate } from 'react-router';

export default function CartList() {
  const { cartItems } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  return (
    <div className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-linear-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-md mx-auto mb-12">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            My Cart
          </h2>
          <div className="w-24 h-0.5 mx-auto mt-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <p className="mt-4 text-base text-gray-500">Review and manage your selected items</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map(item => <CartTile key={item?.id} cartItem={item} />)
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="mt-2 text-gray-500">Looks like you haven't added any items yet</p>
                <button
                  onClick={() => navigate('/product-list')}
                  className="mt-6 px-6 py-2.5 text-sm font-medium text-white bg-linear-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200"
                >
                  Start Shopping
                </button>
              </div>
            )}
          </div>

          <div className="lg:sticky top-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pb-3 border-b border-gray-100">
                Order Summary
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    $ {cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex justify-between text-base sm:text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-cyan-600">
                      $ {cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button
                  disabled={cartItems.length === 0}
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-sm font-medium text-white bg-linear-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => navigate('/product-list')}
                  className="w-full px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
