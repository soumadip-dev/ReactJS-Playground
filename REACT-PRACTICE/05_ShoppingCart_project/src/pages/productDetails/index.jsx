import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ShoppingCartContext } from '../../context';

export default function ProductDetails() {
  const { id } = useParams();
  const {
    productDetails,
    setProductDetails,
    setLoading,
    error,
    setError,
    loading,
    handleAddToCart,
    cartItems,
  } = useContext(ShoppingCartContext);

  const [selectedImage, setSelectedImage] = useState('');

  async function fetchProductDetails() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
      setSelectedImage(data.thumbnail);
      console.log(productDetails);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  useEffect(() => {
    if (productDetails?.thumbnail) {
      setSelectedImage(productDetails.thumbnail);
    }
  }, [productDetails]);

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
    <div>
      <div className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-linear-to-b from-white to-gray-50">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-5 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 lg:p-10">
          <div className="lg:col-span-3 w-full lg:sticky top-6">
            <div className="relative overflow-hidden bg-gray-50 rounded-2xl shadow-md border border-gray-100">
              <img
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                src={selectedImage || productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            {productDetails?.images?.length ? (
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {productDetails?.images.map(imageItem => (
                  <div
                    onClick={() => setSelectedImage(imageItem)}
                    className={`rounded-xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200 border-2 cursor-pointer ${
                      selectedImage === imageItem
                        ? 'border-cyan-500 shadow-md'
                        : 'border-gray-100 hover:border-cyan-200'
                    }`}
                    key={imageItem}
                  >
                    <img
                      src={imageItem}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                      alt="Product secondary image"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-gray-900">
                {productDetails?.title}
              </h2>
              <div className="w-16 h-0.5 mt-3 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <p className="text-3xl sm:text-4xl font-bold text-cyan-600">
                  ${productDetails?.price}
                </p>
                {productDetails?.discountPercentage && (
                  <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-lg">
                    -{Math.round(productDetails.discountPercentage)}%
                  </span>
                )}
              </div>

              {productDetails?.description && (
                <div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {productDetails.description}
                  </p>
                </div>
              )}

              {productDetails?.brand && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Brand:</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-lg">{productDetails.brand}</span>
                </div>
              )}

              {productDetails?.category && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-lg capitalize">
                    {productDetails.category}
                  </span>
                </div>
              )}

              {productDetails?.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(productDetails.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({productDetails.rating})</span>
                </div>
              )}
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  handleAddToCart(productDetails);
                }}
                disabled={
                  productDetails && cartItems.findIndex(item => item.id === productDetails.id) > -1
                }
                className="w-full px-6 py-3 text-sm font-medium text-white bg-linear-to-r from-cyan-600 to-blue-600 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
