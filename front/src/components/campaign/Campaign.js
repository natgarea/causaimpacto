import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import UserService from "../../services/UserService";
import DonationService from "../../services/DonationService";
import CampaignService from "../../services/CampaignService";
import Comment from "../comment/Comment";

export default class Campaign extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.donationService = new DonationService();
    this.campaignService = new CampaignService();
    this.state = {
      campaign: {},
      type: "", //user.type
      user: {},
      comments: []
    };
  }
  componentDidMount() {
    this.getCampaign();
    this.getCampaignDonations();
  }
  getCampaign() {
    this.campaignService.getCampaign(this.props.match.params.id).then(campaign =>
      this.setState({
        ...this.state,
        campaign: campaign
      })
    );
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

  getCampaignDonations() {
    this.donationService
      .getCampaignDonations(this.props.match.params.id)
      .then(response => {
        let comments = response
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 4);
        this.setState({
          ...this.state,
          comments: comments
        });
      });
  }
  render() {
    if (!this.state.user) {
      return <div>Ves la campaña pero te pide que te loguees para donar</div>;
    } else {
      if (this.state.type === "organization") {
        return <div>Ves la campaña sin botón de donar</div>;
      } else {
        return (
          <React.Fragment>
            <div className="card">
              <div className="card-content">
                <div className="media-content columns">
                  <div className="column">
                    <h1 className="title is-2">{this.state.campaign.title}</h1>
                    <img className="campaign-main-img" src={this.state.campaign.image} alt={this.state.campaign.title}/>
                  </div>
                    <div className="column">
                      <ul>
                      <li><span className="title is-5">Objetivo de recaudación:</span> <span className="title is-5 txt-is-orange">{this.state.campaign.fundraisingTarget}€</span></li>
                      <li><span className="title is-5">Recaudación actual:</span> <span className="title is-5 txt-is-blue">{this.state.campaign.totalDonations}€</span></li>
                      </ul>

                      <h3 className="title is-5 has-margin-2">Descripición de la campaña:</h3>
                      {this.state.campaign.description}
                      <Link
                        to={`/donate/c/${this.props.match.params.id}`}
                        className="button is-large is-primary is-fullwidth has-margin-2"
                      >
                        <span className="icon is-medium" aria-hidden="true">
                          <FontAwesomeIcon icon={faDonate} aria-hidden="true" />
                        </span>
                        <span>Donar</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="has-margin-5">
              <h3 className="title">Comentarios de los usuarios</h3>
              {this.state.comments.length > 0 ? (
                <div>
                  {this.state.comments.map((comment, i) => (
                    <Comment
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
              ) : (
                <p>No hay comentarios.</p>
              )}
            </div>
          </React.Fragment>
        );
      }
    }
  }
}
