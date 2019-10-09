import React, { Component } from "react";
import AuthService from "./AuthService";

export default class Signup extends Component {
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
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });

        this.props.getUser(response.user);
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
    return (
      <div class="contents">
        <h1 class="title">Sign Up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div class="field">
            <label>Tipo de usuario:</label>
            <div class="control">
              <div class="select">
                <select>
                  <option value="">Cuenta personal</option>
                  <option value="">Cuenta para organización</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label>Username:</label>
            <div class="control">
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div class="field">
            <label>Email:</label>
            <div class="control">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
              </div>
          </div>

          <div class="field">
            <label>Password:</label>
            <div class="control">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            </div>
          </div>

          <input class="button is-link" type="submit" value="Sign up" />
        </form>
        <p class="help is-danger has-icons-right">{this.state.error ? "Error: por favor, complete todos los campos." : ""}</p>
      </div>
    );
  }
}
