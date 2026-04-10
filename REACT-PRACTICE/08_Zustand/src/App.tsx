import AddHabitForm from './components/add-habit-form';
import HabitList from './components/habit-list';
import HabitStats from './components/habit-stats';
import { Container, Typography } from '@mui/material';
import useHabitStore from './store/store';
import { useEffect } from 'react';

function App() {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, []);
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Habit Tracker
      </Typography>
      <AddHabitForm />
      <HabitList />
      <HabitStats />
    </Container>
  );
}

export default App;
