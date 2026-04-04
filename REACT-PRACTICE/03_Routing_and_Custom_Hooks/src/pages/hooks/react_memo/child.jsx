import { memo } from 'react';
function Child({ header }) {
  console.log('Child is rendering');

  return (
    <div style={child}>
      <h1 style={heading}>{header}</h1>

      <p style={para}>
        This is a simple child component used to practice React memoization. The parent component
        updates its own state, but this component should only re-render when its props actually
        change. This helps improve performance in larger applications.
      </p>
    </div>
  );
}

export default memo(Child);

// ==================================================================================
const child = {
  marginTop: '25px',
  padding: '20px',
  background: 'linear-gradient(145deg,#ffffff,#f1f5f9)',
  borderRadius: '12px',
  border: '2px solid rgba(37,99,235,0.7)',
  boxShadow: `
    0 0 12px rgba(37,99,235,0.7),
    0 0 30px rgba(37,99,235,0.4),
    inset 0 0 8px rgba(37,99,235,0.15)
  `,
  transition: '0.3s ease',
};

const heading = {
  fontSize: '22px',
  color: '#1e293b',
  marginBottom: '8px',
};

const para = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#555',
};
