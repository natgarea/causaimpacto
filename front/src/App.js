import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./services/AuthService";
import Home from "./components/home/Home";
import Update from "./components/update/Update";
import CategoryService from "./services/CategoryService";
import Profile from "./components/profile/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loggedInUser: null,
      confimationCode: "",
      categories: []
    };
    this.authService = new AuthService();
    this.categoryService = new CategoryService();

    this.fetchUser();
    this.getCategories();
  }

  getCategories () {
    return this.categoryService.getCategories().then(response => {
      this.setState({
        categories: response
      });
    })
    .catch(err => {
      this.setState({
        categories: false
      });
    });
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

        <div className="App">
          <Navbar
            userInSession={this.state.loggedInUser}
            logout={this.logout}
          />
          <Switch>
            <Route
              exact
              path="/home"
              render={(props) => <Home
                userInSession={this.state.loggedInUser}
                categoryList={this.state.categories}
                />}
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
              path="/profile/:id"
              render={({match}) => (
                <Profile userInSession={this.state.loggedInUser} match={match} />
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
