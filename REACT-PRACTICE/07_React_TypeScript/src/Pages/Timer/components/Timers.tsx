import { useTimersContext } from '../store/timer-context';
import Timer from './Timer';

export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '0',
        margin: '0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'flex-start',
      }}
    >
      {timers.map(timer => (
        <Timer key={timer.name} name={timer.name} duration={timer.duration} />
      ))}
    </ul>
  );
}
