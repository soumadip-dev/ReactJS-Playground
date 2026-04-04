import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Habit {
  id: string;
  name: string;
  frequency: 'daily' | 'weekly';
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

export const fetchHabits = createAsyncThunk('habits/fetchHabits', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const mockHabits: Habit[] = [
    {
      id: '1',
      name: 'Read a book',
      frequency: 'daily',
      completedDates: ['2023-08-01', '2023-08-02', '2023-08-03'],
      createdAt: '2023-08-01T10:00:00.000Z',
    },
    {
      id: '2',
      name: 'Go for a walk',
      frequency: 'weekly',
      completedDates: ['2023-08-01', '2023-08-08', '2023-08-15'],
      createdAt: '2023-08-01T10:00:00.000Z',
    },
    {
      id: '3',
      name: 'Meditate',
      frequency: 'daily',
      completedDates: ['2023-08-01', '2023-08-02', '2023-08-03'],
      createdAt: '2023-08-01T10:00:00.000Z',
    },
  ];

  return mockHabits;
});

export const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<{ name: string; frequency: 'daily' | 'weekly' }>) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },

    toggleHabit: (state, action: PayloadAction<{ id: string; date: string }>) => {
      const habit = state.habits.find(h => h.id === action.payload.id);

      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);
        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
    deleteHabit: (state, action: PayloadAction<{ id: string }>) => {
      state.habits = state.habits.filter(h => h.id !== action.payload.id);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchHabits.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      })
      .addCase(fetchHabits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch habits';
      });
  },
});

// Export both actions
export const { addHabit, toggleHabit, deleteHabit } = habitSlice.actions;

export default habitSlice.reducer;
