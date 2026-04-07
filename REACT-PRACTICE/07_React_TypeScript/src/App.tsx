import { Route, Routes } from 'react-router';
import GoalTracker from './Pages/Goal_Tracker';
import DynamicForm from './Pages/Dynamic_Form';
import Timer from './Pages/Timer';
import Home from './Pages/Home';

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<GoalTracker />} />
        <Route path="/form" element={<DynamicForm />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </main>
  );
}
