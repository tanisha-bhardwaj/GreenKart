import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate login delay with Redux Thunk
export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
  // Simulating async call (2s delay)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: credentials.username,
        email: `${credentials.username}@greenkart.com`
      });
    }, 2000);
  });
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;