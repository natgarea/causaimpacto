import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      profile: this.userService.getUser(this.props.match.params.id)
    };
  }

  render() {
    if (this.state.profile.type === "donor") {
      return <div></div>;
    } else {
      return (
        <div className={this.props.userInSession.type === "donor" ? "" : "hide"}>
          <Link to={"/donate/o/" + this.props.match.params.id} className="button is-large is-primary">
            <span className="icon is-medium" aria-hidden="true">
              <FontAwesomeIcon icon={faDonate} aria-hidden="true" />
            </span>
            <span>Donar</span>
          </Link>
        </div>
      );
    }
  }
}
