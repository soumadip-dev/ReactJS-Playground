import { useState, useMemo } from 'react';

export default function UseMemoPractice() {
  const [number, setNumber] = useState(5);
  const [darkMode, setDarkMode] = useState(false);

  //* Without useMemo, expensiveCalculation would run on every render
  //* Even when only the theme changes, the heavy loop would execute again
  // const doubleNumber = expensiveCalculation(number);

  //* useMemo caches the calculated value
  //* The calculation only runs again when 'number' changes
  //* Theme changes will NOT trigger the expensive calculation
  const doubleNumber = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...cardStyle,
          backgroundColor: darkMode ? '#1f2933' : '#fffbeb',
          color: darkMode ? '#fefce8' : '#78350f',
        }}
      >
        <input
          style={inputStyle(darkMode)}
          type="number"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
        />

        <button onClick={() => setDarkMode(darkMode => !darkMode)} style={themeButton(darkMode)}>
          Toggle Theme
        </button>

        <div style={infoBoxStyle(darkMode)}>{doubleNumber}</div>
      </div>
    </div>
  );
}

// Simulates a heavy/expensive calculation
// Runs a large loop to demonstrate performance impact
function expensiveCalculation(num) {
  console.log('Running expensive calculation...');
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

// =======================================================================================
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Segoe UI, sans-serif',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  border: '2px solid #f59e0b',
  boxShadow: `
      0 0 12px rgba(245,158,11,0.6),
      0 0 30px rgba(245,158,11,0.25),
      inset 0 0 8px rgba(245,158,11,0.12)
    `,
  padding: '95px',
  margin: '30px auto',
  width: '420px',
  textAlign: 'center',
  borderRadius: '14px',
  fontFamily: 'Arial, sans-serif',
  transition: '0.3s ease',
};

const themeButton = dark => ({
  padding: '8px 16px',
  backgroundColor: dark ? '#d97706' : '#f59e0b',
  color: '#ffffff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: '0.2s',
});

const infoBoxStyle = dark => ({
  backgroundColor: dark ? '#374151' : '#fef3c7',
  color: dark ? '#fefce8' : '#78350f',
  padding: '12px',
  borderRadius: '8px',
  marginTop: '10px',
  width: '100%',
  textAlign: 'center',
  border: '1px solid #f59e0b',
});

const inputStyle = dark => ({
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #f59e0b',
  width: '120px',
  textAlign: 'center',
  fontSize: '14px',
  backgroundColor: dark ? '#374151' : '#ffffff',
  color: dark ? '#fefce8' : '#78350f',
});
