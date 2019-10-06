import React, { Component } from "react";
import AuthService from "./AuthService";
import { Tab, Row, Col, Nav } from "react-bootstrap";

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
    return (
      <div class="card">
        <h3>Login</h3>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Organizations</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <form onSubmit={this.handleFormSubmit}>
                    <fieldset>
                      <label>Username:</label>
                      <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                      />
                    </fieldset>

                    <fieldset>
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                      />
                    </fieldset>

                    <input type="submit" value="Login" />
                  </form>

                  <h1>{this.state.error ? "Error" : ""}</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h1>Replace me</h1>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
