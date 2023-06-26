import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import todoSlice from './slice/todoSlice';

export const store = configureStore({
  reducer: 
    todoSlice.reducer,
    middleware: [thunk]
});