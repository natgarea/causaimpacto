import React, { Component } from "react";
import FormButton from "../form/FormButton";
import AuthService from "./AuthService";
import { withRouter } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "donor", username: "", email: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const type = this.state.type;
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;

    this.service
      .signup(type, username, email, password)
      .then(response => {
        this.setState({
          type: "",
          username: "",
          email: "",
          password: ""
        });

        this.props.getUser(response.user);
        this.props.history.push("/home");
      })
      .catch(error => {
        this.setState({
          type: type,
          username: username,
          email: email,
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
          <h1 className="title">Sign Up</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label>Tipo de usuario:</label>
              <div className="control">
                <div className="select">
                  <select
                    name="type"
                    value={this.state.type}
                    onChange={e => this.handleChange(e)}
                  >
                    <option value="donor">Cuenta personal</option>
                    <option value="organization">
                      Cuenta para organización
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label>Username:</label>
              <div className="control">
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="field">
              <label>Email:</label>
              <div className="control">
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="field">
              <label>Password:</label>
              <div className="control">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <p className="help">Debe contener al menos 8 caracteres.</p>
            </div>

            <FormButton children="Sign Up" />
          </form>
          <p className="help is-danger has-icons-right">
            {this.state.error ? "Error" : ""}
          </p>
        </div>
        <div className="column"></div>
      </div>
    );
  }
}

export default withRouter(Signup)
