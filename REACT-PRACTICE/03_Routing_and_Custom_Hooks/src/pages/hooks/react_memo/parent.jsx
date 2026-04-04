import { useState } from 'react';
import Child from './child';

export default function Parent() {
  const [count, setCount] = useState(0);

  console.log('Parent is rendering');

  return (
    <div style={parent}>
      <p style={text}>You clicked {count} times</p>

      <button style={button} onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <Child header={`I am a child component with count: ${count}`} />
    </div>
  );
}

// ==================================================================================
const parent = {
  padding: '25px',
  margin: '30px auto',
  width: '420px',
  textAlign: 'center',
  background: 'linear-gradient(145deg,#f8fafc,#e2e8f0)',
  borderRadius: '14px',
  border: '2px solid rgba(255,0,0,0.6)',
  boxShadow: `
    0 0 10px rgba(255,0,0,0.6),
    0 0 25px rgba(255,0,0,0.4),
    0 10px 25px rgba(0,0,0,0.15)
  `,
  fontFamily: 'Arial, sans-serif',
  transition: '0.3s ease',
};
const text = {
  fontSize: '18px',
  marginBottom: '10px',
  color: '#333',
};

const button = {
  backgroundColor: '#2563eb',
  color: 'white',
};
