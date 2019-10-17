import React, { Component } from 'react';
import CampaignService from '../../services/CampaignService';
import UserService from "../../services/UserService";


export default class AddCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            deadline: undefined,
            status: "active",
            fundraisingTarget: 0,
            suggestedDonations: 0,
        };
        this.service = new CampaignService();
        this.userService = new UserService();
      }

      handleFormSubmit = event => {
        event.preventDefault();
        const {title, description, deadline, status, fundraisingTarget, suggestedDonations }= this.state;
        const organization = this.props.userInSession._id;
    
        return this.service
          .addCampaign(title, description, deadline, status, fundraisingTarget, suggestedDonations, organization)
          .then(response => {
            this.setState({
              title: "",
              description: "",
              deadline: 2020-12-12,
              status: "",
              fundraisingTarget: 0,
              suggestedDonations: 0
            });
            console.log(response)
            let orgCampaignsUpdate = [...this.props.userInSession.orgCampaigns, response._id]
            let updatedUser = {
              ...this.props.userInSession,
              orgCampaigns: orgCampaignsUpdate
            };
    
            this.userService.updateUser(updatedUser);
            this.props.history.push("/home");
          })
          .catch(error => {
            this.setState({
                title: title,
                description: description,
                deadline: deadline,
                status: status,
                fundraisingTarget: fundraisingTarget,
                suggestedDonations: suggestedDonations,
              error: true
            });
          });
      };
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render() {
        return (
          <React.Fragment>
          <h1 className="title">Datos de la campaña</h1>
              <form>
            <div className="field">
              <label className="label">Título:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder="Título"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Descripción:</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="description"
                  onChange={e => this.handleChange(e)}
                  value={this.state.description}
                  placeholder="Descripción de la campaña."
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Fecha límite:</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  name="deadline"
                  value={this.state.deadline}
                  placeholder=""
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="field">
                    <label>Estado:</label>
                    <div className="control">
                      <div className="select">
                        <select
                          className="select is-normal"
                          name="status"
                          value={this.state.status}
                          onChange={e => this.handleChange(e)}
                        >
                          <option value="active">Activa</option>
                          <option value="inactive">
                            Desactivada
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
              <label className="label">Objetivo de recaudación:</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="fundraisingTarget"
                  value={this.state.fundraisingTarget}
                  placeholder="Cantidad en EUR"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Donación sugerida:</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="suggestedDonation"
                  value={this.state.suggestedDonation}
                  placeholder="Cantidad en EUR"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <button className="button is-link" onClick={(e) => this.handleFormSubmit(e)} type="submit">Añadir campaña</button>
            </form>
            </React.Fragment>);
    }
}
