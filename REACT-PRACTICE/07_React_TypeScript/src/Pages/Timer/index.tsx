import { useNavigate } from 'react-router';
import AddTimer from './components/AddTimer';
import Header from './components/Header';
import Timers from './components/Timers';
import { TimersProvider } from './store/timer-context';

export default function Timer() {
  const navigate = useNavigate();

  return (
    <TimersProvider>
      <button onClick={() => navigate('/')} className="backButton">
        ← Back
      </button>
      <Header />
      <>
        <AddTimer />
        <Timers />
      </>
    </TimersProvider>
  );
}
