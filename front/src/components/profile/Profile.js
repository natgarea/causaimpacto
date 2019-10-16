import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import DonationService from "../../services/DonationService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faGlobe, faEnvelope, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import Comments from "./comments/Comments";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.donationService = new DonationService();
    this.state = {
      profile: {},
      type: "", //user.type
      user: {},
      comments: []
    };
  }

  componentDidMount() {
    this.getProfileUser();
    this.getOrgDonations();
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

  getOrgDonations() {
    this.donationService.getOrgDonations(this.props.match.params.id).then(response => {
      let comments = response.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 4)
      this.setState({
        ...this.state,
        comments: comments
      })
    })
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
          <React.Fragment>
          <div className="card">
            <div className="card-content columns">
              <div className="column">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-256x256">
                      <img
                        className="fixed-logo-size"
                        src={this.state.profile.image}
                        alt={this.state.profile.orgName}
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <h1 className="title is-1">{this.state.profile.orgName}</h1>
                    <h3 className="title is-5">Sobre nosotros</h3>
                    {this.state.profile.orgDescription}
                    {this.state.profile.orgLicense && this.state.profile.orgRegistrar?<p className="has-margin-1"><span className="is-bold">Registro:</span> Nº {this.state.profile.orgLicense} - {this.state.profile.orgRegistrar}</p>:null}
                  </div>
                </div>
              </div>
              <div class="column">
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
              <div className="has-margin-2"><h3 className="title is-5">Detalles de contacto</h3>
          <ul>
            <li className="has-margin-1"><span className="is-bold"><span className="icon is-medium" aria-hidden="true">
                    <FontAwesomeIcon icon={faGlobe} aria-hidden="true" />
                  </span></span> <a to={this.state.profile.orgUrl}>{this.state.profile.orgUrl}</a></li>
            <li className="has-margin-1"><span className="icon is-medium" aria-hidden="true">
                    <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                  </span> <a to={`mailto:${this.state.profile.orgEmail}`}>{this.state.profile.orgEmail}</a></li>
            <li className="has-margin-1"><span className="icon is-medium" aria-hidden="true">
                    <FontAwesomeIcon icon={faPhoneSquareAlt} aria-hidden="true" />
                  </span>  {this.state.profile.orgTelephone}</li>
          </ul>
        </div>
              </div>
            </div>
            </div>
        {/* salto a la siguiente sección */}
        <div className="has-margin-5">
          <h3 className="title">Comentarios de los usuarios</h3>
          {this.state.comments.map((comment, i) => (
            <Comments
            key={i}
            anonymous={comment.anonymousDonation}
            comment={comment.comment}
            firstname={comment.user.userFirstname}
            surname={comment.user.userSurname}
            image={comment.user.image}
            amount={comment.amountDonated}
            date={comment.created_at}
            />
        ))}
        </div>

 
  </React.Fragment>
        );
      } else if (
        this.state.type === "donor" &&
        this.state.profile.type === "donor"
      ) {
        return <div>Si eres usuario y visualizas perfil de usuario</div>;
      } else return <div>Hola</div>;
    }
  }
}
