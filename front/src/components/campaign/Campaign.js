import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";

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
    this.userService.getUser(this.props.match.params.id).then(campaign =>
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
      .getOrgDonations(this.props.match.params.id)
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
      return <div></div>;
    } else {
      return (
        <React.Fragment>
          <div>
            <Link
              to={"/donate/c/" + this.props.match.params.id}
              className="button is-large is-primary is-fullwidth"
            >
              <span className="icon is-medium" aria-hidden="true">
                <FontAwesomeIcon icon={faDonate} aria-hidden="true" />
              </span>
              <span>Donar</span>
            </Link>
          </div>
        </React.Fragment>
      );
    }
  }
}
