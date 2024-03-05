import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'default', // 'default' or 'dark'
  spinner: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setSpinner: (state, action) => {
      state.spinner = action.payload;
    },
  },
});

export const { setTheme, setSpinner } = uiSlice.actions;

export default uiSlice.reducer;