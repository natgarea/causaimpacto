import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

export default class CampaignItem extends Component {
  deleteCampaign = id => {
    this.setState({
      ...this.state,
      campaigns: this.state.campaigns.filter(
        id => this.state.campaigns._id !== id
      )
    });
  };

  render() {
    return (
      <li className="has-margin-2">
        <h4 className="title is-4">
        <Link to={`/campaign/${this.props.campaign._id}`}><span className="icon is-medium">
            <FontAwesomeIcon icon={faFlag} size="xs" aria-hidden="true" />
          </span>
          <span>{this.props.campaign.title}</span></Link>
        </h4>
        <div className="buttons">
          <Link
            to={"/campaign/edit/" + this.props.campaign._id}
            className="button is-primary"
          >
            Editar campaña
          </Link>
          <Link
            to="#"
            className="button is-primary"
            onChange={() => this.deleteCampaign(this.props.campaign.id)}
          >
            Borrar campaña
          </Link>
        </div>
      </li>
    );
  }
}
