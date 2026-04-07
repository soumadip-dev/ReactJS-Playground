// import { useContext } from 'react';
import Button from './UI/Button.tsx';
import { useTimersContext, TimersContext } from '../store/timer-context';

export default function Header() {
  // const ctx = useContext(TimersContext)!;
  const timersCtx = useTimersContext();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        flexDirection: 'row',
      }}
    >
      <h1>ReactTimer</h1>

      <div>
        <Button onClick={timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer}>
          {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
        </Button>
      </div>
    </header>
  );
}
