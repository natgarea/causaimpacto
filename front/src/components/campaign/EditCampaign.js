import React, { Component } from "react";
import CampaignService from "../../services/CampaignService";
import CampaignDetails from "./form/CampaignDetails";
import Image from "./form/Image";

export default class EditCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.campaignService = new CampaignService();
  }

  handleCampaignDetailsSubmit = updateFormValues => {
  let updatedCampaign = {
      ...this.props.campaignInSession,
      title: updateFormValues.title,
      description: updateFormValues.description,
      fundraisingTarget: updateFormValues.fundraisingTarget,
      status: updateFormValues.status,
      deadline: updateFormValues.deadline,
      suggestedDonation: updateFormValues.suggestedDonation
  };

  this.updateCampaign(updatedCampaign);
  };

  handleImageSubmit = imageUrl => {
    let updatedCampaign = {
      ...this.state.campaign,
      pictures: imageUrl
    };

    this.updateCampaign(updatedCampaign);
  };

  updateCampaign(updatedCampaignObj) {
    return this.campaignService
      .updateCampaign(updatedCampaignObj)
      .then()
      .catch();
  }

  render() {
    return (
      <div>
        <div className="columns is-centered">
          <div className="column">
            <h1 className="title">Actualiza tus datos</h1>
            <div>
              <p>
                Despliega cada sección haciendo click en la esquina superior
                derecha. Cumplimenta solo aquellos campos que quieras
                actualizar.
              </p>
            </div>
            <Image
              title="Imagen de campaña"
              handleUpdateSubmit={this.handleImageSubmit}
            />
            <CampaignDetails
              id={this.props.match.params.id}
              handleUpdateSubmit={this.handleCampaignDetailsSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}
