import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ConfirmAccount from "./components/auth/ConfirmAccount";
import AuthService from "./components/auth/AuthService";
import Home from "./components/home/Home";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedInUser: null,
    confimationCode: "" };
    this.service = new AuthService();

    this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <Redirect to="/home" />

          <div className="App">
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
              <Switch className="contents">
                <Route
                  exact
                  path="/home"
                  render={() => <Home userInSession={this.state.loggedInUser} />}
                />
              </Switch>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Redirect to="/login" />

          <div className="App">
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
              <Switch className="contents">
                <Route
                  exact
                  path="/signup"
                  render={() => <Signup getUser={this.getUser} />}
                />
                <Route
                  exact
                  path="/login"
                  render={() => <Login getUser={this.getUser} />}
                />
                <Route
                  exact
                  path="/confirm/:confirmCode"
                  render={() => <ConfirmAccount confirmCode={this.props.match.params} />}
                />
              </Switch>
          </div>
        </React.Fragment>
      );
    }
  }
}
