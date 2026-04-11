import { Provider } from 'react-redux';
import AddHabitForm from './components/add-habit-form';
import HabitList from './components/habit-list';
import HabitStats from './components/habit-stats';
import { Container, Typography } from '@mui/material';
import { store } from './store/store';
// import useHabitStore from './store/store';
// import { useEffect } from 'react';

function App() {
  // const { fetchHabits } = useHabitStore();

  // useEffect(() => {
  //   fetchHabits();
  // }, []);

  return (
    <Provider store={store}>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
        <HabitStats />
      </Container>
    </Provider>
  );
}

export default App;
