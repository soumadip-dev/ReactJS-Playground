import React, { useContext } from 'react';
import { GlobalContext } from '../context';

const CounterButton = () => {
  const { handleChangeCount } = useContext(GlobalContext);
  return <button onClick={handleChangeCount}>CounterButton</button>;
};

export default CounterButton;
