import { keepPreviousData, useQuery } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { Link, useSearchParams } from 'react-router';

export default function ProductsAdvanced() {
  const [searchParams, setSearchParams] = useSearchParams({ skip: 0, limit: 4 });

  const skip = Number(searchParams.get('skip') || 0);
  const limit = Number(searchParams.get('limit') || 4);
  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      return await fetch('https://dummyjson.com/products/categories').then(res => res.json());
    },
  });

  const { data } = useQuery({
    queryKey: ['productsAdvance', limit, skip, q, category],
    queryFn: async () => {
      let url = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`;

      if (category) {
        url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
      }

      return await fetch(url).then(res => res.json());
    },
    placeholderData: keepPreviousData,
    staleTime: 20000,
  });

  const products = data?.products;
  const total = data?.total || 0;

  const handleMove = movecount => {
    setSearchParams(prev => {
      const newSkip = skip + movecount;

      prev.set('skip', Math.min(Math.max(newSkip, 0), total - limit));

      return prev;
    });
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-amber-900/20 via-stone-800/30 to-amber-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,60,30,0.1)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

        <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl"></div>

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

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 relative z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-stone-800">My store</h2>
          </div>

          <div>
            <div className="relative mt-2 rounded-md flex items-center gap-8 mb-4">
              <input
                onChange={debounce(event => {
                  setSearchParams(prev => {
                    prev.set('skip', 0);
                    category && prev.delete('category');
                    prev.set('q', event.target.value);
                    return prev;
                  });
                }, 1000)}
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-stone-900 ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 bg-white/90 backdrop-blur-sm sm:text-sm sm:leading-6"
                placeholder="IPhone"
              />

              <select
                className="border border-stone-300 p-2 rounded-md bg-white/90 backdrop-blur-sm text-stone-700 focus:ring-2 focus:ring-amber-600 focus:border-amber-600"
                onChange={e => {
                  setSearchParams(prev => {
                    prev.set('skip', 0);
                    prev.delete('q');
                    prev.set('category', e.target.value);
                    return prev;
                  });
                }}
              >
                <option value="">Select category</option>
                {categories?.map(category => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map(product => (
              <div
                key={product.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-64">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4 flex justify-between p-4 pt-0">
                  <div>
                    <h3 className="text-sm text-stone-800">
                      <a href="">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-stone-500">{product.category}</p>
                  </div>

                  <p className="text-sm font-medium text-amber-700">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-12">
            {skip > 0 && (
              <button
                className="bg-linear-to-r from-amber-600 to-stone-600 px-4 py-1 text-white rounded hover:from-amber-700 hover:to-stone-700 transition-all shadow-md"
                onClick={() => {
                  handleMove(-limit);
                }}
              >
                Prev
              </button>
            )}

            {skip + limit < total && (
              <button
                className="bg-linear-to-r from-amber-600 to-stone-600 px-4 py-1 text-white rounded hover:from-amber-700 hover:to-stone-700 transition-all shadow-md"
                onClick={() => {
                  handleMove(limit);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
