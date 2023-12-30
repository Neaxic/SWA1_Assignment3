import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/Service/actions-Thunks-api/UserAction"; // Import your updateUser action creator

function Profile() {
  const user = useSelector((state) => state.userProfile); // Get user data from Redux or another state management
  const dispatch = useDispatch();

  // State for form inputs
  const [formData, setFormData] = useState({
    username: "", // Initialize as empty
    password: "", // Initialize as empty
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Include necessary fields in the update payload
    const updatePayload = {
      userId: user.userId, // Preset with current user ID
      username: formData.username,
      password: formData.password,
    };
    dispatch(updateUser(user.userId)); // Dispatch the action to update the user
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <p>UserId: {user.userId}</p>
      <p>Token: {user.token.token}</p>
      <p>Password: **********</p>

      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          New Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>

      <h1>List of All Your Games</h1>
    </div>
  );
}

export default Profile;
