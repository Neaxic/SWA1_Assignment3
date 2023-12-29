import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/Service/actions-Thunks-api/createAction";
//import { useNavigate } from "react-router-dom";
function Signup() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
    createUserError: "",
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
      createUserError: "",
    });

    // Validering
    if (!formData.username || typeof formData.username !== "string") {
      setErrors({
        ...errors,
        usernameError: "Username is required and must be a string.",
      });
      return;
    }

    if (!formData.password || typeof formData.password !== "string") {
      setErrors({
        ...errors,
        passwordError: "Password is required and must be a string.",
      });
      return;
    }
    // Dispatch createUser action
    try {
      await dispatch(
        createUser({
          username: formData.username,
          password: formData.password,
        })
      );
      // Nulstiller formular efter succes
      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      setErrors({
        ...errors,
        createUserError:
          "Username already exists. Please choose a different one.",
      });
    }
  };

  return (
    <>
      <h1>Sign up</h1>
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
          Sign up
        </button>
        {errors.createUserError && (
          <div className="error">{errors.createUserError}</div>
        )}
        <br />
        <br />
      </form>
    </>
  );
}

export default Signup;
