import { Box, Typography, Button, Paper, LinearProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';
import { deleteHabit, toggleHabit, type Habit } from '../store/habit-slice';

export default function HabitList() {
  const { habits } = useSelector((state: RootState) => state.habits);

  const today = new Date().toISOString().split('T')[0];

  const dispatch = useDispatch();

  const getStreak = (habit: Habit) => {
    let streak = 0;
    const currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split('T')[0];
      if (habit.completedDates.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
      {habits.map(habit => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <Box sx={{ flex: 1, minWidth: 200 }}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency.charAt(0).toUpperCase() + habit.frequency.slice(1)}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <Button
                variant="outlined"
                color={habit.completedDates.includes(today) ? 'success' : 'primary'}
                onClick={() => {
                  dispatch(toggleHabit({ id: habit.id, date: today }));
                }}
                startIcon={<CheckCircleIcon />}
              >
                {habit.completedDates.includes(today) ? 'Completed' : 'Mark as Completed'}
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  dispatch(deleteHabit({ id: habit.id }));
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Current Streak: {getStreak(habit)} days</Typography>
            <LinearProgress
              variant="determinate"
              value={(getStreak(habit) / 30) * 100}
              sx={{ mt: 1 }}
            />
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
