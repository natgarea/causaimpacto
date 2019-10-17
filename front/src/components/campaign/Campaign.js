import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import UserService from "../../services/UserService";
import DonationService from "../../services/DonationService";
import CampaignService from "../../services/CampaignService";

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
                    <img className="campaing-main-image" src={this.state.campaign.image} alt={this.state.campaign.title}/>
                  </div>
                    <div className="column">
                      <p>Objetivo de recaudación: {this.state.campaign.fundraisingTarget}</p>
                      <p>Recaudación actual: {this.state.campaign.totalDonations}</p>
                      <Link
                        to={`/donate/c/${this.props.match.params.id}`}
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
              </div>
          </React.Fragment>
        );
      }
    }
  }
}
