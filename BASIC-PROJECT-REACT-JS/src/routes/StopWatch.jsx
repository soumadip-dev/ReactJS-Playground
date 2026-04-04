import { createFileRoute } from '@tanstack/react-router';
import { useRef, useState, useEffect } from 'react';

export const Route = createFileRoute('/StopWatch')({
  component: RouteComponent,
});

function RouteComponent() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();

  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const ms = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}.${ms}`;
  }

  function startTimer() {
    if (!isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
      setIsRunning(true);
    }
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    setIsRunning(false);
  }

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // Basic inline styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
  };

  const timeStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
  };

  const disabledStyle = {
    ...buttonStyle,
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  };

  return (
    <div style={containerStyle}>
      <h1>Stopwatch</h1>
      <p style={timeStyle}>{formatTime(time)}</p>
      {!isRunning ? (
        <button style={buttonStyle} onClick={startTimer}>
          Start
        </button>
      ) : (
        <button style={buttonStyle} onClick={stopTimer}>
          Stop
        </button>
      )}
      <button
        onClick={resetTimer}
        disabled={time === 0}
        style={time === 0 ? disabledStyle : buttonStyle}
      >
        Reset
      </button>
    </div>
  );
}
