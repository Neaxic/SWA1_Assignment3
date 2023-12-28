import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/Service/actions-Thunks/loginAction";

function LoginContainer() {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) =>
    state.user?.data ? "success" : null
  );
  const loginError = useSelector((state) => state.user?.error);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Nulstiller fejlmeddelelser
    setErrors({
      usernameError: "",
      passwordError: "",
    });

    if (!formData.username || typeof formData.username !== "string") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        usernameError: "Username is required and must be a string.",
      }));
      return;
    }

    if (!formData.password || typeof formData.password !== "string") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: "Password is required and must be a string.",
      }));
      return;
    }

    try {
      await dispatch(
        loginUser({ username: formData.username, password: formData.password })
      );
      // NAvigere til spil siden
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form className="form-group custom-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="form-control"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.usernameError && (
          <div className="error">{errors.usernameError}</div>
        )}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.passwordError && (
          <div className="error">{errors.passwordError}</div>
        )}
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Login
        </button>
      </form>
    </>
  );
}

export default LoginContainer;
