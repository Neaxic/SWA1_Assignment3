import React, { Component } from "react";
import { createUser } from "../redux/Service/actions-Thunks/createAction";
import { connect, useDispatch } from "react-redux";

//Normal konstruktor hvor den sætter defuelt values til være tomme
class CreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  //HandleSubmit bruges når vreate user bliver trykket
  handleSubmit = (event) => {
    event.preventDefault();

    useDispatch(createUser(username, password));
  };
  //HandleChange bruges når brugeren laver om i input feltet
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Create User</button>
      </form>
    );
  }
}

export default CreateContainer;
