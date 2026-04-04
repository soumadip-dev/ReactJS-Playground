import React, { useContext } from 'react';
import { GlobalContext } from '../context';

const CounterDisplay = () => {
  const counterState = useContext(GlobalContext);
  const { count } = counterState;
  return <div>Count value: {count}</div>;
};

export default CounterDisplay;
