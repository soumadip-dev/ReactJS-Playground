import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { Box, Button, Paper, Typography, LinearProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { toggleHabit, deleteHabit, type Habit } from '../store/habitSlice';

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const today = new Date().toISOString().split('T')[0];

  const getStreak = (habit: Habit) => {
    let streak = 0;
    const currentDate = new Date();
    while (true) {
      const dateString = currentDate.toISOString().split('T')[0];
      if (habit.completedDates.includes(dateString)) {
        streak += 1;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  };

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 4 }}>
      {habits.map(habit => (
        <Paper
          key={habit.id}
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: '#f9f9f9',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.02)' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                {habit.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Frequency: {habit.frequency}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Streak: {getStreak(habit)} day{getStreak(habit) !== 1 ? 's' : ''}
              </Typography>

              {/* LinearProgress showing streak progress */}
              <LinearProgress
                variant="determinate"
                value={(getStreak(habit) / 30) * 100}
                sx={{ mt: 1, height: 10, borderRadius: 5 }}
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
              <Button
                variant={habit.completedDates.includes(today) ? 'contained' : 'outlined'}
                color={habit.completedDates.includes(today) ? 'success' : 'primary'}
                startIcon={<CheckCircleIcon />}
                onClick={() => dispatch(toggleHabit({ id: habit.id, date: today }))}
                sx={{ minWidth: 160 }}
              >
                {habit.completedDates.includes(today) ? 'Completed' : 'Mark as completed'}
              </Button>

              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(deleteHabit({ id: habit.id }))}
                sx={{ minWidth: 100 }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
