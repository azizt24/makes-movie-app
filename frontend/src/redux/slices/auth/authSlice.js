// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
      user: null,
      isAuthenticated: false,
      isLoading: true,
  },
  reducers: {
    setUser: (state, {payload}) => {
          state.isAuthenticated = payload;
          state.isLoading = payload.isLoading;
          state.user = payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;