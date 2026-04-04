import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/ToggleBackgroundColor')({
  component: RouteComponent,
});

function RouteComponent()  {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('#1b1b1b');
  const [buttonStyle, setButtonStyle] = useState('white');

  function handleClick() {
    setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white');
    setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
    setButtonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white');
  }

  // Style objects
  const sectionStyle = {
    backgroundColor,
    color: textColor,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyles = {
    position: 'absolute',
    top: '100px',
    right: '30px',
    padding: '10px 20px',
    background: 'transparent',
    cursor: 'pointer',
    color: textColor,
    border: `2px solid ${textColor}`,
    backgroundColor: buttonStyle,
  };

  const contentStyle = {
    fontSize: '5rem',
    fontFamily: 'cursive',
    lineHeight: '80px',
    textAlign: 'center',
  };

  return (
    <section style={sectionStyle}>
      <button onClick={handleClick} style={buttonStyles}>
        {backgroundColor === '#1b1b1b' ? 'White Theme' : 'Black Theme'}
      </button>
      <section className="content">
        <h1 style={contentStyle}>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
}