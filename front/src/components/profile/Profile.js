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
    console.log(this.state.profile.orgName)
    if (this.state.profile.type === "donor") {
      return <div></div>;
    } else {
      return (
        <div className="card">
          <div className="card-content columns">
            <div className="column">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-480x480">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{this.state.profile.orgName}</p>
                </div>
              </div>
            </div>
            <div className={this.props.userInSession.type === "donor" ? "" : "hide"}>
            <Link to={"/donate/o/" + this.props.match.params.id} className="button is-large is-primary">
            <span className="icon is-medium" aria-hidden="true">
              <FontAwesomeIcon icon={faDonate} aria-hidden="true" />
            </span>
            <span>Donar</span>
          </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
