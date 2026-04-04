import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/Todo')({
  component: RouteComponent,
  defaultPreload: 'Intent',
});

function RouteComponent() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, hasLoaded]);

  const handleSubmit = () => {
    if (input.trim() !== '') {
      setTodos(todos => [
        ...todos,
        {
          text: input,
          id: Date.now(),
        },
      ]);
    }
    setInput('');
  };

  const removeTodo = id => {
    setTodos(todos.filter(t => t.id !== id));
  };

  // Styles
  const containerStyle = {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '250px',
  };

  const submitButtonStyle = {
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    marginTop: '30px',
    width: '100%',
    maxWidth: '400px',
  };

  const todoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '12px 16px',
    marginBottom: '10px',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  };

  const closeButtonStyle = {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleSubmit} style={submitButtonStyle}>
          Submit
        </button>
      </div>
      <ul style={listStyle}>
        {todos.map(({ text, id }) => (
          <li style={todoStyle} key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)} style={closeButtonStyle}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
