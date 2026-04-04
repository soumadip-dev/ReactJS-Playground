import { Link } from 'react-router';

const routes = [
  {
    to: '/products',
    label: 'Products',
    badge: '/products',
    desc: 'Fetch and display all products',
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    hoverBg: 'hover:bg-emerald-50/30',
  },
  {
    to: '/paginated',
    label: 'Paginated Products',
    badge: '/paginated',
    desc: 'Advanced pagination with useInfiniteQuery',
    color: 'from-violet-500 to-purple-500',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-700',
    borderColor: 'border-violet-200',
    hoverBg: 'hover:bg-violet-50/30',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-900/20 via-stone-800/30 to-amber-900/20 p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,60,30,0.1)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-stone-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with coffee theme */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">☕</span>
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-amber-800 via-stone-700 to-amber-800 bg-clip-text text-transparent">
              The Awesome React Query
            </h1>
            <span className="text-4xl">⚛️</span>
          </div>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Master React Query with these interactive examples
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map(route => (
            <Link
              key={route.to}
              to={route.to}
              className={`group relative bg-white/90 backdrop-blur-sm border ${route.borderColor} rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-95 no-underline overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${route.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="flex justify-between items-start">
                <span
                  className={`text-xs font-mono px-3 py-1.5 rounded-full ${route.bgLight} ${route.textColor} font-semibold border ${route.borderColor} shadow-sm`}
                >
                  {route.badge}
                </span>
                <div
                  className={`w-8 h-8 rounded-full ${route.bgLight} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <svg
                    className={`w-4 h-4 ${route.textColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-xl font-bold text-stone-800 m-0 group-hover:text-stone-900 transition-colors">
                {route.label}
              </p>

              <p className="text-sm text-stone-600 m-0 leading-relaxed">{route.desc}</p>

              <div
                className={`h-0.5 w-12 ${route.bgLight} rounded-full mt-2 group-hover:w-full transition-all duration-300`}
              ></div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 text-stone-500 text-sm">
          <span className="inline-flex items-center gap-2">
            <span>✨</span> Click any card to explore <span>✨</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
