import React, { Component } from "react";
import ProfileSettings from "./donor/ProfileSettings";
import SuggestedOrg from "./donor/SuggestedOrg";
import DonationList from "./donor/DonationList";
import CauseList from "./donor/CauseList";
import Notification from "../notification/Notification";
import OrganizationSettings from "./organization/OrganizationSettings";
import CampaignControls from "./organization/CampaignControls";
import UserList from "./organization/UserList";

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
            <Notification
              toggleClass={this.toggleClass}
              notification={this.state.notification}
            />
            <div className="columns">
              <ProfileSettings userData={this.state.loggedUser} />
              <SuggestedOrg />
            </div>
            <div className="columns">
              <DonationList />
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title">¿Qué causas te interesan?</h3>
                    { <CauseList/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <Notification
              toggleClass={this.toggleClass}
              notification={this.state.notification}
            />
            <div className="columns">
              <OrganizationSettings userData={this.state.loggedUser} />
            </div>
            <div className="columns">
              <UserList />
              <CampaignControls />
            </div>
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  }
}
