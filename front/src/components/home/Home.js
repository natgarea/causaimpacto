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
      status: props.userInSession.status,
      notification: null
    };
  }

  componentDidMount() {
    this.checkStatus();
  }

  checkStatus() {
    if (this.state.status === "active")
      this.setState({ ...this.state, notification: true });
    else this.setState({ ...this.state, notification: false });
  }

  toggleClass() {
    this.setState({ notification: true });
  }
  render() {
    if (this.props.userInSession) {
      if (this.props.userInSession.type === "donor") {
        return (
          <div>
            <Notification />  
            <div className="columns">
              <ProfileSettings userData={this.props.userInSession} />
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
