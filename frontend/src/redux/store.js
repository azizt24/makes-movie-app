import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../redux/slices/ui.slice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
