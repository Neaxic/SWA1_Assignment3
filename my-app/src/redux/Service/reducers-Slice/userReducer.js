import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isCreatingUser: false,
  isUpdatingProfile: false,
  userData: null,
  token: null,
  userId: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoggedIn = false;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.userData = action.payload.user;
      state.token = action.payload;
      state.userId = action.payload.userId;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userData = null;
      state.token = null;
      state.userId = null;
      state.error = null;
    },
    setUserToken(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    createUserRequest(state) {
      state.isCreatingUser = true;
    },
    createUserSuccess(state, action) {
      state.isCreatingUser = false;
      state.userData = action.payload;
      state.error = null;
    },
    createUserFailure(state, action) {
      state.isCreatingUser = false;
      state.error = action.payload;
    },
    updateProfileRequest(state) {
      state.isUpdatingProfile = true;
    },
    updateProfileSuccess(state, action) {
      state.isUpdatingProfile = false;
      state.userData = action.payload;
      state.error = null;
    },
    updateProfileFailure(state, action) {
      state.isUpdatingProfile = false;
      state.error = action.payload;
    },
    getUserRequest(state) {
      state.isLoggedIn = false;
    },
    getUserSuccess(state, action) {
      state.isLoggedIn = true;
      state.userData = action.payload;
      state.error = null;
    },
    getUserFailure(state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  setUserToken,
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
