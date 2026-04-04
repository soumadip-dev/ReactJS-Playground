import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export const Route = createFileRoute('/Far-away')({
  component: RouteComponent,
});

function RouteComponent() {
  const [items, setItems] = useState(initialItems);
  const [sortBy, setSortBy] = useState('input');

  let sortedItems = [...items];
  if (sortBy === 'description') {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'packed') {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const handleSubmit = (description, quantity) => {
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    setItems(items => [...items, newItem]);
  };

  const handleDelete = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleToggleItem = id => {
    setItems(items =>
      items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  const handleClear = () => {
    const confirmed = window.confirm('Are you sure you want to clear your packing list?');
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form
        handleSubmit={handleSubmit}
        items={items}
        sortBy={sortBy}
        setSortBy={setSortBy}
        handleClear={handleClear}
      />
      <PackingList
        sortedItems={sortedItems}
        handleDelete={handleDelete}
        handleToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <h1 className="logo">🌴 Far Away 💼</h1>
      <p className="tagline">Your Tropical Adventure Packing List</p>
    </div>
  );
}

function Form({ handleSubmit, sortBy, setSortBy, handleClear }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const onSubmit = e => {
    e.preventDefault();
    if (!description) return;
    handleSubmit(description, quantity);
    setDescription('');
    setQuantity(1);
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="add-form">
        <h3 className="form-title">What do you need for your trip? ✈️</h3>
        <div className="form-controls">
          <select
            className="select"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="input"
            placeholder="Item name..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
          <button className="add-button">Add</button>
        </div>
      </form>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="select">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="clear-button" onClick={handleClear}>
          Clear list
        </button>
      </div>
    </div>
  );
}

function PackingList({ sortedItems, handleDelete, handleToggleItem }) {
  return (
    <div className="list-container">
      <ul className="packing-list">
        {sortedItems.map(item => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Stats({ items }) {
  if (!items.length)
    return <p className="stats-empty">Start adding some items to your packing list 📝</p>;

  const numberOfItems = items.length;
  const numberOfPackedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((numberOfPackedItems / numberOfItems) * 100) || 0;

  return (
    <footer className={percentage === 100 ? 'stats stats-complete' : 'stats'}>
      {percentage === 100
        ? 'You got everything! Ready to go ✈️'
        : `💼 You have ${numberOfItems} items on your list, and you already packed ${numberOfPackedItems} (${percentage}%)`}
    </footer>
  );
}

function Item({ item, handleDelete, handleToggleItem }) {
  return (
    <li className={item.packed ? 'item item-packed' : 'item'}>
      <input
        type="checkbox"
        className="checkbox"
        checked={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span className="item-text">
        {item.quantity} {item.description}
      </span>
      <button className="delete-button" onClick={() => handleDelete(item.id)}>
        ❌
      </button>
    </li>
  );
}

export default RouteComponent;

// CSS Styles
const styles = `
  :root {
    --color-primary: #0ea5e9;
    --color-primary-light: #7dd3fc;
    --color-primary-lighter: #e0f2fe;
    --color-secondary: #f59e0b;
    --color-secondary-dark: #78350f;
    --color-success: #10b981;
    --color-danger: #ef4444;
    --color-text: #083344;
    --color-text-light: #64748b;
    --color-white: #ffffff;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --border-radius: 8px;
    --transition: all 0.2s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.5;
    background-color: #f8fafc;
    color: var(--color-text);
  }

  .app {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    background-color: var(--color-white);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }

  .logo-container {
    background: linear-gradient(135deg, var(--color-primary) 0%, #0284c7 100%);
    padding: 2rem 1.5rem;
    text-align: center;
    color: var(--color-white);
  }

  .logo {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tagline {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.9;
  }

  .form-container {
    background-color: var(--color-primary-light);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: var(--color-text);
  }

  .add-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
  }

  .form-controls {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    width: 100%;
  }

  .select, .input {
    padding: 0.75rem 1rem;
    border-radius: var(--border-radius);
    border: none;
    background-color: var(--color-primary-lighter);
    color: var(--color-text);
    font-size: 1rem;
    outline: none;
    font-weight: 500;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
  }

  .select {
    cursor: pointer;
    flex-shrink: 0;
  }

  .input {
    width: 100%;
  }

  .input:focus, .select:focus {
    box-shadow: 0 0 0 2px var(--color-primary);
  }

  .add-button {
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    border: none;
    background-color: var(--color-secondary);
    color: var(--color-secondary-dark);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    white-space: nowrap;
    box-shadow: var(--shadow-sm);
  }

  .add-button:hover {
    background-color: #d97706;
    color: var(--color-white);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .actions {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: space-between;
  }

  .clear-button {
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    border: none;
    background-color: var(--color-danger);
    color: var(--color-white);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
  }

  .clear-button:hover {
    background-color: #dc2626;
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }

  .list-container {
    flex: 1;
    background-color: var(--color-primary-lighter);
    padding: 2rem;
    overflow-y: auto;
  }

  .packing-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--color-white);
    padding: 1rem 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
  }

  .item:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .item-packed {
    background-color: #f0fdf4;
    color: var(--color-text-light);
    text-decoration: line-through;
  }

  .item-text {
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
  }

  .checkbox {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: var(--color-success);
    cursor: pointer;
  }

  .delete-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: var(--color-danger);
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    border-radius: 4px;
  }

  .delete-button:hover {
    background-color: #fee2e2;
    transform: scale(1.1);
  }

  .stats {
    text-align: center;
    font-weight: 600;
    padding: 1.5rem;
    color: var(--color-secondary-dark);
    font-size: 1rem;
    background-color: var(--color-secondary);
  }

  .stats-complete {
    background-color: var(--color-success);
    color: var(--color-white);
  }

  .stats-empty {
    text-align: center;
    padding: 1.5rem;
    color: var(--color-text-light);
    font-style: italic;
  }

  @media (max-width: 768px) {
    .form-controls {
      flex-direction: column;
      align-items: stretch;
    }

    .actions {
      flex-direction: column;
    }

    .add-button, .clear-button {
      width: 100%;
    }
  }
`;

// Inject styles into the document
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);
