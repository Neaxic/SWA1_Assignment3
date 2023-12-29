import {
  loginRequest,
  loginSuccess,
  loginFailure,
  setUserToken,
  logout,
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
} from "../reducers-Slice/UserReducer";

import { useDispatch } from "react-redux";

export function createUser(formData) {
  return (dispatch) => {
    fetch("http://localhost:9090/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data contains userId and token
        dispatch({ type: "USER_CREATED", payload: data });
      })
      .catch((error) => {
        // handle error
      });
  };
}
export function loginUser(formData) {
  return (dispatch) => {
    return fetch("http://localhost:9090/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json(); // Antager at serveren svarer med JSON
      })
      .then((data) => {
        dispatch(loginSuccess(data));
        dispatch(setUserToken({ token: data.token, userId: data.userId }));
      })
      .catch((error) => {
        // Dispatcher failure action med fejlbesked
        dispatch(loginFailure(error.message));
      });
  };
}

export function logoutUser(token) {
  return fetch(`http://localhost:9090/logout?token=${token}`, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      return response.text();
    })
    .catch((error) => {
      console.error("Error in logoutUser:", error);

      throw error;
    });
}
