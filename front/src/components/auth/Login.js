import React, { Component } from "react";
import FormButton from "../form/FormButton";
import AuthService from "./AuthService";
import { withRouter } from "react-router-dom";

class Login extends Component {
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
        this.props.history.push('/home');
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
      <div className="columns is-centered">
        <div className="column"></div>
        <div className="column">
          <h1 className="title">Log In</h1>

          <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label>Username:</label>
              <div className="control">
                <input
                  type="text"
                  name="username"
                  title="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Password:</label>
              <div className="control">
                <input
                  type="password"
                  name="password"
                  title="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                  required
                />
              </div>
            </div>

            <FormButton children="Login" />
          </form>

          <h3>{this.state.error ? "Error" : ""}</h3>
        </div>
        <div className="column"></div>
      </div>
    );
  }
}

export default withRouter(Login);
