import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DonationList extends Component {
  render() {
    
    return (
      <React.Fragment>
        {Array.isArray(this.props.donations) ? this.props.donations.map((donation,i)=><li key={i} className="has-margin-1">Has donado {donation.amountDonated}€ a <Link to={donation.org?`/profile/${donation.org._id}`:`/campaign/${donation.campaign._id}`}>
        {donation.org?donation.org.orgName:donation.campaign.title}
        </Link></li>):null}
      </React.Fragment>
    );
  }
}
