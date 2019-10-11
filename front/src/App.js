import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Home from "./components/home/Home";
import UpdateData from "./components/home/update/UpdateData";
import UpdatePicture from "./components/home/update/UpdatePicture";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedInUser: null, confimationCode: "" };
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
              render={(props) => <Home {...props} userInSession={this.state.loggedInUser} />}
            />
            <Route
              exact
              path="/home/updateData"
              render={() => (
                <UpdateData userInSession={this.state.loggedInUser} getUser={(user) => this.getUser(user)} />
              )}
            />
            <Route
              exact
              path="/home/updatePicture"
              render={() => (
                <UpdatePicture userInSession={this.state.loggedInUser} />
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
