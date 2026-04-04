import Parent from './react_memo/parent';
import UseCallbackPractice from './usecallback';
import UseMemoPractice from './usememo';
import UseRefPractice from './useref';

export default function HooksPractice() {
  return (
    <div style={mainContainer}>
      <h1 style={headingStyle}>Hooks Practice</h1>

      <div style={gridStyle}>
        <div style={boxStyle}>
          <h2>React Memo</h2>
          <Parent />
        </div>

        <div style={boxStyle}>
          <h2>useCallback Hook</h2>
          <UseCallbackPractice />
        </div>

        <div style={boxStyle}>
          <h2>useRef Hook</h2>
          <UseRefPractice />
        </div>

        <div style={boxStyle}>
          <h2>useMemo Hook</h2>
          <UseMemoPractice />
        </div>
      </div>
    </div>
  );
}

const mainContainer = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f6f8',
  minHeight: '100vh',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
  letterSpacing: '1px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gap: '15px',
  height: '400px',
};

const boxStyle = {
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
};
