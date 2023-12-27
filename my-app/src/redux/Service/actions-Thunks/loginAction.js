import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

export const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  payload: response,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
