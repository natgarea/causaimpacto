import React, { Component } from "react";
import FormButton from "../form/FormButton";
import AuthService from "../../services/AuthService";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

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
          <div className="card">
            <div className="card-content">
              <div className="content align-items-center">
                <h1 className="title">Sign Up</h1>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="field">
                    <label>Tipo de usuario:</label>
                    <div className="control">
                      <div className="select">
                        <select
                          className="select is-normal"
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
                    <div className="control has-icons-left">
                      <input
                        className="input is-normal"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                      />
                      <span className="icon is-medium is-left">
                      <FontAwesomeIcon icon={faUser} aria-hidden="true"/>
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label>Email:</label>
                    <div className="control has-icons-left">
                      <input
                        className="input is-normal"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                      />
                      <span className="icon is-medium is-left">
                      <FontAwesomeIcon icon={faEnvelope} aria-hidden="true"/>
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
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                      />
                      <span className="icon is-medium is-left">
                      <FontAwesomeIcon icon={faLock} aria-hidden="true"/>
                      </span>
                    </div>
                    <p className="help">Debe contener al menos 8 caracteres.</p>
                  </div>

                  <FormButton children="Sign Up" />
                </form>
                <p className="help is-danger has-icons-right">
                  {this.state.error ? "Error" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    );
  }
}

export default withRouter(Signup);
