import { createFileRoute } from '@tanstack/react-router';
import useDebounce from '../hooks/useDebounce';
import { useState } from 'react';

export const Route = createFileRoute('/DebounceDemo')({
  component: RouteComponent,
});

function RouteComponent() {
  const [text, setText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useDebounce(() => setDebouncedText(text), 1000, [text]);

  return (
    <div
      style={{
        padding: '30px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: '600px',
        margin: '40px auto',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          color: '#2c3e50',
          marginBottom: '25px',
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: '600',
        }}
      >
        Debounce Demo
      </h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: '12px 15px',
          fontSize: '16px',
          width: '100%',
          marginBottom: '25px',
          borderRadius: '6px',
          border: '1px solid #dfe6e9',
          outline: 'none',
          transition: 'border 0.3s ease',
          boxSizing: 'border-box',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
        }}
      />

      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <p
          style={{
            margin: '0 0 15px 0',
            fontSize: '16px',
            color: '#2d3436',
          }}
        >
          <strong
            style={{
              display: 'inline-block',
              width: '120px',
              color: '#3498db',
            }}
          >
            Immediate:
          </strong>
          <span
            style={{
              color: '#636e72',
              wordBreak: 'break-word',
            }}
          >
            {text || '...'}
          </span>
        </p>
        <p
          style={{
            margin: '0',
            fontSize: '16px',
            color: '#2d3436',
          }}
        >
          <strong
            style={{
              display: 'inline-block',
              width: '120px',
              color: '#e74c3c',
            }}
          >
            Debounced:
          </strong>
          <span
            style={{
              color: '#636e72',
              wordBreak: 'break-word',
            }}
          >
            {debouncedText || '...'}
          </span>
        </p>
      </div>
    </div>
  );
}
