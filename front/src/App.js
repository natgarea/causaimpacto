import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Home from "./components/home/Home";
import Update from "./components/update/Update";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedInUser: null, confimationCode: "" };
    this.authService = new AuthService();

    this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.authService.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    return this.authService
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
    return (
      <React.Fragment>
        <Redirect to="/home" />

        <div className="App">
          <Navbar
            userInSession={this.state.loggedInUser}
            logout={this.logout}
          />
          <Switch>
            <Route
              exact
              path="/home"
              render={(props) => <Home userInSession={this.state.loggedInUser} />}
            />
            <Route
              exact
              path="/update"
              render={() => (
                <Update userInSession={this.state.loggedInUser} />
              )}
            />
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
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
