import { loginSuccess, loginFailure } from "../../types/actionsTypes";
import { useDispatch } from "react-redux";

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
        // Dispatcher success action med modtagne data
        dispatch(loginSuccess(data));
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
