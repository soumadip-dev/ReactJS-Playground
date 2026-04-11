import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../store/habit-slice';

export default function AddHabitForm() {
  const [name, setName] = useState<string>('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');

  const dispatch = useDispatch();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(addHabit({ name, frequency }));
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Habit Name"
          placeholder="Enter habit name"
          fullWidth
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            label="Frequency"
            value={frequency}
            onChange={e => setFrequency(e.target.value as 'daily' | 'weekly')}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
}
