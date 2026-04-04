import { Provider } from 'react-redux';
import store from './store/store';
import { Container, Typography } from '@mui/material';
import HabitList from './components/habitList';
import AddHabitForm from './components/addHabitForm';
import HabitStats from './components/HabitStats';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
        <HabitStats />
      </Container>
    </Provider>
  );
};

export default App;
