import React, { Component } from "react";
import { Link } from "react-router-dom";
import CampaignItem from "./CampaignItem";
import CampaignService from "../../../services/CampaignService";


export default class CampaignControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
    };
    this.campaignService = new CampaignService();
  }

  componentDidMount() {
    this.getOrgCampaigns(this.props.userData._id);
  }

  getOrgCampaigns(userId) {
    return this.campaignService
      .getOrgCampaigns(userId)
      .then(response => {
        this.setState({
          ...this.state,
          campaigns: response
        });
      })
      .catch(err => {
        this.setState({
          ...this.state,
          campaigns: false
        });
      });
  }

  render() {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <h3 className="title">Gestionar campañas</h3>
            <Link to="/addcampaign" className="button is-primary is-large has-margin-3">
              Crear nueva campaña
            </Link>
            <h3 className="title">Campañas activas</h3>
            <ul>
              {this.state.campaigns.map((campaign, i) => (
                <CampaignItem key={i} campaign={campaign}></CampaignItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
