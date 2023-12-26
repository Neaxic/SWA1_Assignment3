import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE } from "./types";

export const createRequest = (data) => ({
  type: CREATE_REQUEST,
  payload: data,
});

export const createSuccess = (response) => ({
  type: CREATE_SUCCESS,
  payload: response,
});

export const createFailure = (error) => ({
  type: CREATE_FAILURE,
  payload: error,
});
