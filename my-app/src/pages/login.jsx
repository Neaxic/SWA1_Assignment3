import React, { useState } from 'react';

const LoginScreen = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [createData, setCreateData] = useState({
    username: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateChange = (e) => {
    const { name, value } = e.target;
    setCreateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Login data:', loginData);
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Login data:', createData);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLoginSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleLoginChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      <div>
        <form onSubmit={handleCreateSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={createData.username}
            onChange={handleCreateChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={createData.password}
            onChange={handleCreateChange}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
      </div>
    </div>
  );
};

export default LoginScreen;





