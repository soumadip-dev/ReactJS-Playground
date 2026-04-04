import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from './features/counter/CounterSlice';

const App = () => {
  const count = useSelector(state => state.count.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(Number(value) || 0));
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">{count}</div>
      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div className="custom-increment">
        <input
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter value"
        />
        <button onClick={handleIncrementByValue}>Add Value</button>
      </div>
    </div>
  );
};

export default App;
