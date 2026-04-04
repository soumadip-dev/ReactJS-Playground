import { useState, useEffect, useCallback } from 'react';

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log('Updating Items');
  }, [getItems]);

  return items.map(item => <div key={item}>{item}</div>);
}

export default function UseCallbackPractice() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //* Without useCallback, this function would be recreated on every render
  //* Even when only the theme changes, List would re-render because
  //* the getItems function reference would be different

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  //* useCallback memoizes the function so it only changes when 'number' changes
  //* This prevents unnecessary List re-renders when only the theme updates

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? '#111827' : '#f0fdf4',
    color: dark ? '#f9fafb' : '#065f46',
    border: '2px solid #10b981',
    boxShadow: `
      0 0 12px rgba(16,185,129,0.6),
      0 0 30px rgba(16,185,129,0.25),
      inset 0 0 8px rgba(16,185,129,0.12)
    `,
    padding: '95px',
    margin: '30px auto',
    width: '420px',
    textAlign: 'center',
    borderRadius: '14px',
    fontFamily: 'Arial, sans-serif',
    transition: '0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={themeStyle}>
        <input
          style={inputStyle(dark)}
          type="number"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
        />

        <div style={buttonGroupStyle}>
          <button style={buttonStyle(dark)} onClick={() => setDark(prevDark => !prevDark)}>
            Toggle theme
          </button>
        </div>

        <div style={infoBoxStyle(dark)}>
          <List getItems={getItems} />
        </div>
      </div>
    </div>
  );
}

// ======================================================================================
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Segoe UI, sans-serif',
};

const inputStyle = dark => ({
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #10b981',
  width: '120px',
  textAlign: 'center',
  fontSize: '14px',
  backgroundColor: dark ? '#1f2937' : '#ffffff',
  color: dark ? '#f9fafb' : '#065f46',
});

const buttonGroupStyle = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const buttonStyle = dark => ({
  padding: '8px 16px',
  color: '#ffffff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: '0.2s',
  backgroundColor: dark ? '#059669' : '#10b981',
});

const infoBoxStyle = dark => ({
  backgroundColor: dark ? '#1f2937' : '#d1fae5',
  color: dark ? '#f9fafb' : '#064e3b',
  padding: '12px',
  borderRadius: '8px',
  marginTop: '10px',
  width: '100%',
  textAlign: 'center',
  border: '1px solid #10b981',
});
