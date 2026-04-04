import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { decrement, increment } from './features/counters/counterSlice';
import Posts from './components/Posts';

const App = () => {
  const counters = useSelector(state => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = id => {
    dispatch(increment(id));
  };

  const handleDecrement = id => {
    dispatch(decrement(id));
  };

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  return (
    <div className="min-h-screen w-full bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Simple Counter App</h1>

        <div className="flex flex-col items-center gap-6 mb-10">
          {counters.map(counter => (
            <Counter
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))}
          <Stats count={totalCount} />
        </div>

        <Posts />
      </div>
    </div>
  );
};

export default App;
