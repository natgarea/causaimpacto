import React, { Component } from "react";
import AuthService from "../auth/AuthService";
import { Link } from "react-router-dom";
// import {
//   Navbar,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button
// } from "react-bootstrap";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              <button onClick={this.handleLogout}>Logout</button>
            </li>
          </ul>

          <div className="header">
            <img src="/images/logo.png" alt="" height="100" />
            <h2>Welcome {this.state.loggedInUser.username} - Ironhacker</h2>
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}
