import { useReducer } from 'react';

const UseReducerExample = () => {
  const containerStyle = {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: '40px auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    marginBottom: '20px',
    color: '#333',
  };

  const buttonStyle = {
    padding: '8px 14px',
    margin: '6px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#f5f7ff',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  };

  const initialState = {
    showTextFlag: true,
    chnageTextStyleFlag: false,
  };
  const HIDE_TEXT = 'HIDE_TEXT';
  const SHOW_TEXT = 'SHOW_TEXT';
  const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE';

  const reducer = (state, action) => {
    switch (action.type) {
      case HIDE_TEXT:
        console.log('(state, action)', state, action);
        return { ...state, showTextFlag: false };
      case SHOW_TEXT:
        return { ...state, showTextFlag: true };
      case CHANGE_TEXT_STYLE:
        return { ...state, chnageTextStyleFlag: !state.chnageTextStyleFlag };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('Loggin from useReducer Example:', state);

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>Use Reducer Example</h3>
      <h4 style={{ color: state.chnageTextStyleFlag ? 'red' : 'green' }}>
        {state.showTextFlag && 'Text is visible'}
      </h4>
      <button style={buttonStyle} onClick={() => dispatch({ type: HIDE_TEXT })}>
        Hide Text
      </button>
      <button style={buttonStyle} onClick={() => dispatch({ type: SHOW_TEXT })}>
        Show Text
      </button>
      <button style={buttonStyle} onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>
        Toggle Text Styles
      </button>
    </div>
  );
};

export default UseReducerExample;
