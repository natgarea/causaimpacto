import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import { Link } from "react-router-dom";
import Search from "./Search";
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav
          className="navbar is-fixed-top is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="https://bulma.io">
              <img
                alt="causa impacto logo"
                src="/images/logo.png"
                className="nav-logo"
              />
            </Link>

            <Link
              to="#"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="#" className="navbar-item">Inicio</Link>
              <Link to="/profile/5da354c4c3e59516a751bd9b" className="navbar-item">Donar</Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <Search />
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="#" className="navbar-link">
                <figure className="image is-24x24 has-margin-right">
                  <img
                    className = "is-rounded"
                    src={this.state.loggedInUser.image ? this.state.loggedInUser.image : "https://bulma.io/images/placeholders/24x24.png"}
                    alt={this.state.loggedInUser.username}
                  />
                </figure> {this.state.loggedInUser.username}
                </Link>

                <div className="navbar-dropdown">
                  <Link to="/home" className="navbar-item">Home</Link>
                  <Link to="/update" className="navbar-item">Mis datos</Link>
                  <Link to="/profile" className="navbar-item">Mi perfil</Link>
                  <hr className="navbar-divider" />
                  <Link to="#" className="navbar-item" onClick={this.handleLogout}>
                    Log out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav
          className="navbar is-fixed-top is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="https://bulma.io">
              <img
                alt="causa impacto logo"
                src="/images/logo.png"
                className="nav-logo"
              />
            </Link>

            <Link
              to="#"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="#" className="navbar-item">Inicio</Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="#" className="navbar-link">More</Link>

                <div className="navbar-dropdown">
                  <Link to="#" className="navbar-item">About</Link>
                  <Link to="#" className="navbar-item">Jobs</Link>
                  <Link to="#" className="navbar-item">Contact</Link>
                  <hr className="navbar-divider" />
                  <Link to="#" className="navbar-item">Report an issue</Link>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-primary" to="/signup">
                    Signup
                  </Link>
                  <Link className="button is-light" to="/login">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  }
}
