import React from "react";

function CreateContainer() {
  <form onSubmit={this.handleSubmit}>
    <label>
      Username:
      <input type="text" name="username" onChange={this.handleChange} />
    </label>
    <label>
      Password:
      <input type="password" name="password" onChange={this.handleChange} />
    </label>
    <button type="submit">Create User</button>
  </form>;
}

export default CreateContainer;
