import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import CampaignService from "../../../services/CampaignService";
import moment from 'moment';

export default class CampaignDetails extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          title: "",
          description: "",
          deadline: "",
          status: "",
          fundraisingTarget: 0,
          suggestedDonation: 0,
            openTab: true,
            expand: faAngleDown,
            cardClass: "card-content hide"
        }
        this.campaignService = new CampaignService();
    }

    componentDidMount() {
      this.campaignService.getCampaign(this.props.id).then(response => {
       
        this.setState({
          ...this.state,
          title: response.title,
          description: response.description,
          deadline: moment(response.deadline).format("YYYY-MM-DD"),
          status: response.status,
          fundraisingTarget: response.fundraisingTarget,
          suggestedDonation: response.suggestedDonation
        });
      });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          ...this.state,
          [name]: value
        });
      };
    
      toggleCardClass() {
        if (!this.state.openTab) {
            this.setState({
                ...this.state,
                openTab: true,
                expand: faAngleDown,
                cardClass: "card-content hide"})
        } else {
            this.setState({
              ...this.state,
                openTab: false,
                expand: faAngleUp,
                cardClass: "card-content"
            })
        }
      }
    render() {
      console.log(moment(this.state.deadline).format("DD MM YYYY"))
        return (
            <div className="card has-margin-2">
        <header className="card-header">
          <p className="card-header-title">Datos de la campaña</p>
          <Link to="#" onClick={() => this.toggleCardClass()}>
            <span className="icon is-medium has-margin-right-top"><FontAwesomeIcon icon={this.state.expand} aria-hidden="true"/></span>
          </Link>
        </header>
        <div className={this.state.cardClass}>
          <div className="content">
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
                          name="type"
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
                  type="text"
                  name="fundaraisingTarget"
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
                  type="text"
                  name="suggestedDonations"
                  value={this.state.suggestedDonation}
                  placeholder="Cantidad en EUR"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <button className="button is-link" onClick={() => this.props.handleUpdateSubmit(this.state)} type="submit">Actualizar</button>
            </form>
          </div>
        </div>
      </div>
        )
    }
}
