import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/Calculator')({
  component: RouteComponent,
});

function RouteComponent() {
  const [inputValue, setInputValue] = useState('');

  const clear = () => setInputValue('');
  const display = val => setInputValue(inputValue + val);
  const calculate = () => {
    var result = eval(inputValue);
    setInputValue(result);
  };

  return (
    <form className="calculator" name="calc" style={calculatorStyle}>
      <input
        type="text"
        className="value"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        style={inputStyle}
      />
      <span className="num clear" onClick={clear} style={clearButtonStyle}>
        c
      </span>
      <span onClick={() => display('/')} style={operatorButtonStyle}>
        /
      </span>
      <span onClick={() => display('*')} style={operatorButtonStyle}>
        *
      </span>
      <span onClick={() => display('7')} style={numberButtonStyle}>
        7
      </span>
      <span onClick={() => display('8')} style={numberButtonStyle}>
        8
      </span>
      <span onClick={() => display('9')} style={numberButtonStyle}>
        9
      </span>
      <span onClick={() => display('-')} style={operatorButtonStyle}>
        -
      </span>
      <span onClick={() => display('4')} style={numberButtonStyle}>
        4
      </span>
      <span onClick={() => display('5')} style={numberButtonStyle}>
        5
      </span>
      <span onClick={() => display('6')} style={numberButtonStyle}>
        6
      </span>
      <span className="plus" onClick={() => display('+')} style={operatorButtonStyle}>
        +
      </span>
      <span onClick={() => display('1')} style={numberButtonStyle}>
        1
      </span>
      <span onClick={() => display('2')} style={numberButtonStyle}>
        2
      </span>
      <span onClick={() => display('3')} style={numberButtonStyle}>
        3
      </span>
      <span onClick={() => display('0')} style={numberButtonStyle}>
        0
      </span>
      <span onClick={() => display('00')} style={numberButtonStyle}>
        00
      </span>
      <span onClick={() => display('.')} style={numberButtonStyle}>
        .
      </span>
      <span className="num equal" onClick={calculate} style={equalButtonStyle}>
        =
      </span>
    </form>
  );
}

// Style objects
const calculatorStyle = {
  width: '300px',
  margin: '50px auto',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#f0f0f0',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const inputStyle = {
  width: '100%',
  height: '50px',
  marginBottom: '20px',
  fontSize: '24px',
  textAlign: 'right',
  padding: '0 10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const baseButtonStyle = {
  display: 'inline-block',
  width: '22%',
  margin: '1%',
  height: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '20px',
  fontWeight: 'bold',
};

const numberButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: 'white',
  color: '#333',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

const operatorButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: '#4ecdc4',
  color: 'white',
};

const clearButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: '#ff6b6b',
  color: 'white',
};

const equalButtonStyle = {
  ...baseButtonStyle,
  backgroundColor: '#48dbfb',
  color: 'white',
};
