import { useEffect, useState, useRef } from 'react';

export default function UseRefPractice() {
  const renderCountRef = useRef(0);
  const textInputRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

  const handleFocusInput = () => {
    textInputRef.current.focus();
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={counterStyle}>Renders: {renderCountRef.current}</div>

        <input
          ref={textInputRef}
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Type something..."
          style={inputStyle}
        />

        <button style={buttonStyle} onClick={handleFocusInput}>
          Focus Input
        </button>
      </div>
    </div>
  );
}

// ==================================================================================

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Segoe UI, sans-serif',
};

const cardStyle = {
  backgroundColor: '#faf5ff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  border: '2px solid #9333ea',
  boxShadow: `
    0 0 12px rgba(147,51,234,0.6),
    0 0 30px rgba(147,51,234,0.25),
    inset 0 0 8px rgba(147,51,234,0.12)
  `,
  padding: '95px',
  margin: '30px auto',
  width: '420px',
  textAlign: 'center',
  borderRadius: '14px',
  fontFamily: 'Arial, sans-serif',
  transition: '0.3s ease',
};

const inputStyle = {
  padding: '10px 12px',
  fontSize: '15px',
  borderRadius: '8px',
  border: '1px solid #9333ea',
  outline: 'none',
  width: '100%',
  transition: '0.3s',
  backgroundColor: '#ffffff',
  color: '#581c87',
};

const buttonStyle = {
  padding: '10px 18px',
  backgroundColor: '#9333ea',
  color: '#ffffff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '15px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: '0.3s',
  boxShadow: '0 4px 10px rgba(147,51,234,0.3)',
  width: '100%',
};

const counterStyle = {
  backgroundColor: '#ede9fe',
  color: '#4c1d95',
  padding: '12px',
  borderRadius: '8px',
  marginTop: '10px',
  width: '100%',
  textAlign: 'center',
  border: '1px solid #9333ea',
  fontWeight: '600',
};
