import React, { Component } from "react";
import ProfileSettings from "./user/account/ProfileSettings";
import SuggestedOrg from "./user/account/SuggestedOrg";
import DonationList from "./user/account/DonationList";
import CauseList from "./user/account/CauseList";
import Notification from "../notification/Notification";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: this.props.userInSession,
      notification: null,
      prueba: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!!props.userInSession) {
      let notification;
      props.userInSession.status === "active"
        ? (notification = true)
        : (notification = false);
      return (
        (state.loggedUser = props.userInSession),
        (state.notification = notification)
      );
    }
    return null;
  }

  toggleClass = () => this.setState({ notification: true });

  render() {
      if (this.props.userInSession) {
        if (this.state.loggedUser.type === "donor") {
          return (
            <div>
              <Notification toggleClass={this.toggleClass} notification={this.state.notification} />
              <div className="columns">
                <ProfileSettings userData={this.state.loggedUser} />
                <SuggestedOrg />
              </div>
              <div className="columns">
                <DonationList />
                <CauseList />
              </div>
            </div>
          );
        } else {
          return (<div></div>)
        }
      } else {
        return (<div></div>);
      }
  }
}
