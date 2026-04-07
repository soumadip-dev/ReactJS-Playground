import { useTimersContext } from '../store/timer-context';
import Timer from './Timer';

export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map(timer => (
        <Timer key={timer.name} name={timer.name} duration={timer.duration} />
      ))}
    </ul>
  );
}
