import React, { Component } from "react";
import FormButton from "../form/FormButton";
import AuthService from "./AuthService";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

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
        this.props.history.push("/home");
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
          <div class="card">
            <div class="card-content">
              <div class="content align-items-center">
                <h1 className="title">Log In</h1>

                <form onSubmit={this.handleFormSubmit}>
                  <div className="field">
                    <label>Username:</label>
                    <div className="control has-icons-left">
                      <input
                        className="input is-normal"
                        type="text"
                        name="username"
                        title="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                        required
                      />
                      <span class="icon is-medium is-left">
                      <FontAwesomeIcon icon={faUser} aria-hidden="true"/>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label>Password:</label>
                    <div className="control has-icons-left">
                      <input
                        className="input is-normal"
                        type="password"
                        name="password"
                        title="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                        required
                      />
                      <span class="icon is-medium is-left">
                      <FontAwesomeIcon icon={faLock} aria-hidden="true"/>
                      </span>
                    </div>
                  </div>

                  <FormButton children="Login" />
                </form>

                <h3>{this.state.error ? "Error" : ""}</h3>
                </div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    );
  }
}

export default withRouter(Login);
