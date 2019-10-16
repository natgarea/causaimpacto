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
import Donate from "./components/donate/Donate";
import UserService from "./services/UserService";
import EditCampaign from "./components/campaign/EditCampaign";
import SuccessfulDonation from "./components/donate/SuccessfulDonation";
import Campaign from "./components/campaign/Campaign";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: null,
      confimationCode: "",
      categories: [],
      randomOrg: {}
    };
    this.authService = new AuthService();
    this.categoryService = new CategoryService();
    this.userService = new UserService();

    this.fetchUser();
    this.getCategories();
    this.getRandomOrg();
  }

  getCategories() {
    return this.categoryService
      .getCategories()
      .then(response => {
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

  getRandomOrg() {
    return this.userService
      .getOrg()
      .then(response => {
        let randomOrg = response[Math.floor(Math.random() * response.length)];
        this.setState({
          randomOrg: randomOrg
        });
      })
      .catch(err => {
        this.setState({
          randomOrg: false
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
    if (this.state.loggedInUser) {
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
                render={props => (
                  <Home
                    userInSession={this.state.loggedInUser}
                    categoryList={this.state.categories}
                    randomOrg={this.state.randomOrg}
                  />
                )}
              />
              <Route
                exact
                path="/profile/:id"
                render={({ match }) => (
                  <Profile
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
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
                path="/campaign/:id"
                render={({ match }) => (
                  <Campaign
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
              />
              <Route
                exact
                path="/campaign/edit/:id"
                render={({ match }) => (
                  <EditCampaign
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
              />
              <Route
                exact
                path="/donate/o/:id"
                render={({ match }) => (
                  <Donate
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
              />
              <Route
                exact
                path="/donate/success/:id"
                render={({ match }) => (
                  <SuccessfulDonation
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
              />
            </Switch>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="App">
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                // render={() => <Signup getUser={this.getUser} />}
              />
              <Route
                exact
                path="/home"
                render={props => (
                  <Home
                    userInSession={this.state.loggedInUser}
                    categoryList={this.state.categories}
                    randomOrg={this.state.randomOrg}
                  />
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
              <Route
                exact
                path="/profile/:id"
                render={({ match }) => (
                  <Profile
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
              />
              <Route
                exact
                path="/campaign/:id"
                render={({ match }) => (
                  <Campaign
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
              />
              <Route
                exact
                path="/campaign/:id"
                render={({ match }) => (
                  <Campaign
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
              />
            </Switch>
          </div>
        </React.Fragment>
      );
    }
  }
}
