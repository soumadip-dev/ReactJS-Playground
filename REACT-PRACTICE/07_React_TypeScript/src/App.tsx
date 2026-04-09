import { Route, Routes } from 'react-router';
import GoalTracker from './Pages/Goal_Tracker';
import DynamicForm from './Pages/Dynamic_Form';
import Timer from './Pages/Timer';
import Home from './Pages/Home';
import DataFetching from './Pages/Data_Fetching';

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<GoalTracker />} />
        <Route path="/form" element={<DynamicForm />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/fetch" element={<DataFetching />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </main>
  );
}
