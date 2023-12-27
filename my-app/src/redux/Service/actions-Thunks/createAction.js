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

export const createUser = (userData) => {
  return (dispatch) => {
    dispatch(createUserRequest());
    fetch("http://localhost:9090/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => dispatch(createUserSuccess(data)))
      .catch((error) => dispatch(createUserFailure(error)));
  };
};
