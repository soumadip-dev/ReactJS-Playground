import { createFileRoute } from '@tanstack/react-router';
import { useReducer } from 'react';
import usePrev from '../hooks/usePrev';

export const Route = createFileRoute('/Counter')({
  component: RouteComponent,
});

function RouteComponent() {
  // Initial state and reducer
  const initialState = { counter: 0 };

  const reducer = (state, { type, value }) => {
    switch (type) {
      case 'INCREMENT':
        return { counter: state.counter + value };
      case 'DECREMENT':
        return { counter: state.counter - value };
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  // Action creators
  const increment = () => dispatch({ type: 'INCREMENT', value: 1 });
  const decrement = () => dispatch({ type: 'DECREMENT', value: 1 });

  // Button event handlers
  const handleMouseOver = (color, hoverColor) => e => {
    e.target.style.backgroundColor = hoverColor;
  };

  const handleMouseOut = color => e => {
    e.target.style.backgroundColor = color;
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.count}>{count.counter}</h1>

      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onMouseOver={handleMouseOver('#007BFF', '#0056b3')}
          onMouseOut={handleMouseOut('#007BFF')}
          onClick={increment}
        >
          +
        </button>

        <button
          style={{ ...styles.button, ...styles.decrementButton }}
          onMouseOver={handleMouseOver('#dc3545', '#a71d2a')}
          onMouseOut={handleMouseOut('#dc3545')}
          onClick={decrement}
        >
          -
        </button>
      </div>

      <p style={styles.prevText}>Previous Count: {usePrev(count.counter)}</p>
    </div>
  );
}

// Styles
const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    background: '#f7f9fc',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: '72px',
    color: '#333',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '24px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  decrementButton: {
    backgroundColor: '#dc3545',
  },
  prevText: {
    fontSize: '18px',
    color: '#555',
  },
};
