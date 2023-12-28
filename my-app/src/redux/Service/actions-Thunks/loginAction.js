export function loginUser(formData, dispatch) {
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
      return response.json(); // Assuming the server responds with JSON
    })
    .then((data) => {
      // Dispatch success action with received data
      dispatch(loginSuccess(data));
    })
    .catch((error) => {
      // Dispatch failure action with error message
      dispatch(loginFailure(error.message));
    });
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
