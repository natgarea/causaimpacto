import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./services/AuthService";
import Home from "./components/home/Home";
import Update from "./components/update/Update";
import CategoryService from "./services/CategoryService";
import Profile from "./components/profile/Profile";
import DonateOrg from "./components/donate/DonateOrg";
import DonateCampaign from "./components/donate/DonateCampaign";
import UserService from "./services/UserService";
import EditCampaign from "./components/campaign/EditCampaign";
import SuccessfulDonation from "./components/donate/SuccessfulDonation";
import Campaign from "./components/campaign/Campaign";
import Main from "./components/Main";
import Category from "./components/category/Category";
import { withRouter } from "react-router-dom";

class App extends Component {
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
      this.props.history.push("/");
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
                path="/navbar"
                render={props => (
                  <Navbar
                    userInSession={this.state.loggedInUser}
                    logout={this.logout}
                  />
                )}
              />
              <Route
                exact
                path="/"
                render={props => (
                  <Main
                    userInSession={this.state.loggedInUser}
                    categoryList={this.state.categories}
                  />
                )}
              />
              <Route
                exact
                path="/category/:id"
                render={props => (
                  <Category { ...props } userInSession={this.state.loggedInUser} />
                )}
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
                path="/profile/:id"
                render={(props) => (
                  <Profile {...props} userInSession={this.state.loggedInUser} />
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
                render={props => (
                  <Campaign
                    {...props}
                    userInSession={this.state.loggedInUser}
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
                  <DonateOrg
                    userInSession={this.state.loggedInUser}
                    match={match}
                  />
                )}
              />
              <Route
                exact
                path="/donate/c/:id"
                render={({ match }) => (
                  <DonateCampaign
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
                render={props => (
                  <Main
                    userInSession={this.state.loggedInUser}
                    categoryList={this.state.categories}
                  />
                )}
              />
              <Route
                exact
                path="/category/:id"
                render={({ ...props }) => (
                  <Category { ...props } userInSession={this.state.loggedInUser} />
                )}
              />
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

export default withRouter(App);
