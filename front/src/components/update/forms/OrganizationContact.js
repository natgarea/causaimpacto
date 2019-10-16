import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default class OrganizationContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgContactPerson: props.contactPerson,
      orgTelephone: props.telephone,
      orgEmail: props.email,
      orgUrl: props.url,
      openTab: true,
      expand: faAngleDown,
      cardClass: "card-content hide"
    };
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
        cardClass: "card-content hide"
      });
    } else {
      this.setState({
        ...this.state,
        openTab: false,
        expand: faAngleUp,
        cardClass: "card-content"
      });
    }
  }

  render() {
    return (
      <div className="card has-margin-2">
        <header className="card-header">
          <p className="card-header-title">Datos de contacto</p>
          <Link to="#" onClick={() => this.toggleCardClass()}>
            <span className="icon is-medium has-margin-right-top">
              <FontAwesomeIcon icon={this.state.expand} aria-hidden="true" />
            </span>
          </Link>
        </header>
        <div className={this.state.cardClass}>
          <div className="content">
            <form>
              <div className="field">
                <label className="label">Persona de contacto:</label>
                <div className="control">
                  <input
                    className="input"
                    name="orgContactPerson"
                    type="text"
                    value={this.state.orgContactPerson}
                    placeholder="Nombre Apellidos"
                    onChange={e => this.handleChange(e)}
                  />
                </div>

                <span className="help">
                  <p>
                    Este campo <span className="txt-is-violet is-bold">NO</span>{" "}
                    será visible públicamente.{" "}
                    <span className="txt-is-orange is-bold">causa</span>
                    <span className="txt-is-blue is-bold">justa</span> lo
                    utilizará solo para verificar datos.
                  </p>
                </span>
              </div>
              <div className="field">
                <label className="label">Teléfono público:</label>
                <div className="control">
                  <input
                    className="input"
                    name="orgTelephone"
                    type="text"
                    value={this.state.orgTelephone}
                    placeholder="+34..."
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email público:</label>
                <div className="control">
                  <input
                    className="input"
                    name="orgEmail"
                    type="email"
                    value={this.state.orgEmail}
                    placeholder="nombre@email.com"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Dirección web:</label>
                <div className="control">
                  <input
                    className="input"
                    name="orgUrl"
                    type="url"
                    value={this.state.orgUrl}
                    placeholder="http://www.tusitio.com"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <button
                className="button is-link"
                onClick={() => this.props.handleUpdateSubmit(this.state)}
                type="submit"
              >
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
