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

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.campaignService.getCampaign(this.props.match.params.id).then(response => {
     
      this.setState({
        ...this.state,
        campaign: response
      });
    });
  }

  handleImageSubmit = imageUrl => {
    let updatedCampaign = {
      ...this.state.campaign,
      image: imageUrl
    };

    console.log()

    this.campaignService.updateCampaign(this.props.match.params.id, updatedCampaign);
  };

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
            />
          </div>
        </div>
      </div>
    );
  }
}
