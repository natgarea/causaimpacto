import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      profile: {},
      type: "", //user.type
      user: {}
    };
  }

  componentDidMount() {
    this.getProfileUser();
  }

  static getDerivedStateFromProps(props, state) {
    if (!!props.userInSession) {
      return (
        (state.user = props.userInSession),
        (state.type = props.userInSession.type)
      );
    }
    return null;
  }

  getProfileUser() {
    this.userService.getUser(this.props.match.params.id).then(profile =>
      this.setState({
        ...this.state,
        profile: profile
      })
    );
  }

  render() {
    console.log(this.state);
    if (!this.state.user) {
      return <div></div>;
    } else {
      if (
        this.state.type === "organization" &&
        this.state.profile.type === "donor"
      ) {
        return <div>Si eres organización y visualizas perfil de usuario</div>;
      } else if (
        this.state.type === "organization" &&
        this.state.profile.type === "organization"
      ) {
        return <div>Si eres org y visualizas perfil de org</div>;
      } else if (
        this.state.type === "donor" &&
        this.state.profile.type === "organization"
      ) {
        return (
          <div className="card">
            <div className="card-content columns">
              <div className="column">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-256x256">
                      <img
                        src={this.state.profile.image}
                        alt={this.state.profile.orgName}
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="title is-1">{this.state.profile.orgName}</h1>
                    <h3 className="title is-5">Sobre nosotros</h3>
                    {this.state.profile.orgDescription}
                  </div>
                </div>
              </div>
              <div
                className={
                  (this.state.type === "donor") !== "donor" ? "column" : "hide"
                }
              >
                <Link
                  to={"/donate/o/" + this.props.match.params.id}
                  className="button is-large is-primary is-fullwidth"
                >
                  <span className="icon is-medium" aria-hidden="true">
                    <FontAwesomeIcon icon={faDonate} aria-hidden="true" />
                  </span>
                  <span>Donar</span>
                </Link>
              </div>
            </div>
          </div>
        );
      } else if (
        this.state.type === "donor" &&
        this.state.profile.type === "donor"
      ) {
        return <div>Si eres usuario y visualizas perfil de organización</div>;
      } else return <div>Hola</div>;
    }
  }
}
