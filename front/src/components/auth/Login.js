import React, { Component } from "react";
import AuthService from "./AuthService";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {

    return (<div className="contents">
      <h1 class="title">Log In</h1>
     
      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label>Username:</label>
          <input type="text" name="username" title="username" placeholder="username" value={this.state.username} onChange={e => this.handleChange(e)} required autofocus />
        </fieldset>

        <fieldset>
          <label>Password:</label>
          <input type="password" name="password" title="password" placeholder="password" value={this.state.password} onChange={e => this.handleChange(e)} required />
        </fieldset>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>

      <h3>{this.state.error ? 'Error' : ''}</h3>
      </div>)
  }
}