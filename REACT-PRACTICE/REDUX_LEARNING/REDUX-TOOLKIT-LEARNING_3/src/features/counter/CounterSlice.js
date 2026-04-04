import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  // 1. Provide a name for the slice
  name: 'counter',
  // 2. Set the initial state
  initialState,
  // 3. Define reducers
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated automatically for each reducer
export const { increment, decrement, incrementByValue } = counterSlice.actions;

// Export the reducer to be used in the store
export default counterSlice.reducer;
