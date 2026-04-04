import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Products = () => {
  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();

    return data.products;
  };

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ['products'], queryFn: fetchProduct, staleTime: 10000 });

  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch('https://dummyjson.com/products');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setProducts(data.products);
  //       console.log(data.products);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchProduct();
  // }, []);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-900/20 via-stone-800/30 to-amber-900/20">
        <svg className="size-10 animate-spin text-amber-700" viewBox="0 0 24 24" fill="none">
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-90"
            fill="currentColor"
            d="M22 12a10 10 0 00-10-10v4a6 6 0 016 6h4z"
          />
        </svg>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-900/20 via-stone-800/30 to-amber-900/20">
        <p className="text-red-500 font-medium text-lg">Error: {error.message}</p>
      </div>
    );

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-linear-to-br from-amber-900/20 via-stone-800/30 to-amber-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,60,30,0.1)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl"></div>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="fixed top-6 left-6 z-20">
        <Link
          to="/"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white border border-stone-200 text-stone-700 hover:text-amber-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2
            className="text-5xl font-bold tracking-tight text-stone-800 inline-block relative"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Products
            <span className="block w-14 h-0.75 bg-amber-600 rounded-full mx-auto mt-3" />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-200 shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="overflow-hidden bg-stone-100 aspect-square">
                  <img
                    alt={product.title}
                    src={product.images?.[0]}
                    className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-500"
                  />
                </div>

                <div className="px-4.5 pt-4 pb-5">
                  <h3 className="text-[0.95rem] font-semibold text-stone-700 group-hover:text-amber-700 truncate">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-[1.15rem] font-bold text-amber-700">₹ {product.price}</p>

                  <span className="mt-2.5 inline-block text-[0.7rem] font-semibold uppercase text-white bg-stone-800 px-2.5 py-0.75 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
