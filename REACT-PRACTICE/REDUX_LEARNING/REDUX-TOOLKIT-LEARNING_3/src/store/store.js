import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';

export default configureStore({
  reducer: {
    count: counterReducer,
  },
});
