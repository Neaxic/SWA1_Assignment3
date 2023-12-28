import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoading = action.payload.isLoading;
      state.data = action.payload.data;
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.isLoading = initialState.isLoading;
      state.data = initialState.data;
      state.error = initialState.error;
    },
  },
});

export const { login, logout } = userReducer.actions; // Rettet her

export default userReducer.reducer;
