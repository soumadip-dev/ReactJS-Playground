import Count from './Count';
import Button from './Button';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
      <Count count={count} />
      <div className="flex gap-4 mt-4">
        <Button handler={onIncrement} title="Increment" />
        <Button handler={onDecrement} title="Decrement" />
      </div>
    </div>
  );
};

export default Counter;
