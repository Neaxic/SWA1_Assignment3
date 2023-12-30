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

// Removed useDispatch import as it's not needed in this context

// createUser action creator
export function createUser(formData) {
  return async (dispatch) => {
    dispatch(createUserRequest());
    try {
      const response = await fetch("http://localhost:9090/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(createUserSuccess(data));
      } else {
        dispatch(createUserFailure(data));
      }
    } catch (error) {
      dispatch(createUserFailure(error.message));
    }
  };
}

// loginUser action creator
export function loginUser(credentials) {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await fetch("http://localhost:9090/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(setUserToken(data.token)); // Assuming you store the token here
        dispatch(loginSuccess(data));
      } else {
        dispatch(loginFailure(data));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
}

// logoutUser action creator
export function logoutUser() {
  return (dispatch) => {
    dispatch(logout());
    // Perform any additional logout operations if necessary
  };
}

// updateUser action creator
export function updateUser(id) {
  return async (dispatch) => {
    dispatch(updateProfileRequest());
    try {
      const response = await fetch(`http://localhost:9090/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id), // Pass the updated user data as JSON
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(updateProfileSuccess(data));
      } else {
        dispatch(updateProfileFailure(data));
      }
    } catch (error) {
      dispatch(updateProfileFailure(error.message));
    }
  };
}
