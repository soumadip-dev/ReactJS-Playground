import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

const Product = () => {
  const { productId } = useParams();
  const [mainImage, setMainImage] = useState(null);
  const [showUpdateInput, setShowUpdatedInput] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');

  async function fetchProduct() {
    const { data } = await axios.get(`https://dummyjson.com/products/${productId}`);
    return data;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ['product', productId],
    queryFn: fetchProduct,
    staleTime: 10000,
  });

  const mutation = useMutation({
    mutationFn: data => {
      return axios.put(`https://dummyjson.com/products/${productId}`, data);
    },
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-900/20 via-stone-800/30 to-amber-900/20">
        <div className="size-10 border-4 border-amber-700 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-900/20 via-stone-800/30 to-amber-900/20">
        <p className="text-red-500 text-lg">Error: {error.message}</p>
      </div>
    );

  return (
    <div className="bg-linear-to-br from-amber-900/20 via-stone-800/30 to-amber-900/20 min-h-screen py-14 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,60,30,0.1)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <Link
          to="/products"
          className="inline-block mb-8 text-sm font-semibold text-amber-700 hover:underline"
        >
          ← Back to products
        </Link>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200 p-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-stone-50 rounded-xl overflow-hidden">
                <img
                  src={mainImage || data.images?.[0]}
                  alt={data.title}
                  className="w-full h-105 object-cover"
                />
              </div>
              <div className="flex gap-3 mt-4">
                {data.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setMainImage(img)}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-stone-200 hover:border-amber-600 transition"
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs uppercase bg-stone-800 text-white px-3 py-1 rounded-full">
                {data.category}
              </span>
              <h1 className="text-4xl font-bold mt-4 text-stone-800">{data.title}</h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-semibold">
                  ⭐ {data.rating}
                </div>
                <p className="text-stone-500 text-sm">Stock: {data.stock}</p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <p className="text-3xl font-bold text-amber-700">₹ {data.price}</p>
                <p className="text-sm text-stone-400 line-through">
                  ₹ {Math.round(data.price + (data.price * data.discountPercentage) / 100)}
                </p>
                <span className="text-emerald-600 text-sm font-semibold">
                  {data.discountPercentage}% OFF
                </span>
              </div>
              <p className="mt-6 text-stone-600 leading-relaxed">{data.description}</p>
              <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500 space-y-2">
                <p>
                  <span className="font-semibold text-stone-800">Brand:</span> {data.brand}
                </p>
                <p>
                  <span className="font-semibold text-stone-800">SKU:</span> {data.sku || 'N/A'}
                </p>
                <p>
                  <span className="font-semibold text-stone-800">Warranty:</span>{' '}
                  {data.warrantyInformation || '1 Year'}
                </p>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => setShowUpdatedInput(prev => !prev)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-800 text-white text-sm font-semibold hover:bg-stone-700 active:scale-95 transition-all duration-150"
                >
                  ✏️ Change Title
                </button>

                {showUpdateInput && (
                  <form className="mt-4 flex items-center gap-3">
                    <input
                      type="text"
                      value={updatedTitle}
                      onChange={e => setUpdatedTitle(e.target.value)}
                      placeholder="Enter new title..."
                      className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 bg-white/50 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition"
                    />
                    <button
                      type="submit"
                      onClick={e => {
                        e.preventDefault();
                        mutation.mutate({ title: updatedTitle });
                        setShowUpdatedInput(false);
                        setUpdatedTitle('');
                      }}
                      className="px-5 py-2.5 rounded-xl bg-amber-700 text-white text-sm font-semibold hover:bg-amber-600 active:scale-95 transition-all duration-150 whitespace-nowrap"
                    >
                      ✓ Update
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
