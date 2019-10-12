import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default class OrganizationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: props.name,
      orgDescription: props.description,
      orgRegistrar: props.registrar,
      orgLicense: props.license,
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
            openTab: true,
            expand: faAngleDown,
            cardClass: "card-content hide"})
    } else {
        this.setState({
            openTab: false,
            expand: faAngleUp,
            cardClass: "card-content"
        })
    }
  }

  render() {
    return (
      <div className="card has-margin-2">
        <header className="card-header">
          <p className="card-header-title">Datos de la organización</p>
          <Link to="#" onClick={() => this.toggleCardClass()}>
            <span class="icon is-medium has-margin-right-top"><FontAwesomeIcon icon={this.state.expand} aria-hidden="true"/></span>
          </Link>
        </header>
        <div className={this.state.cardClass}>
          <div className="content">
              <form>
            <div className="field">
              <label className="label">Nombre:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="orgName"
                  value={this.state.orgName}
                  placeholder="Nombre"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Descripción:</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="orgDescription"
                  onChange={e => this.handleChange(e)}
                  value={this.state.orgDescription}
                  placeholder="Descripción breve de la misión, los valores y los objetivos de la organización."
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Lugar de registro:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="orgRegistrar"
                  value={this.state.orgRegistrar}
                  placeholder="Lugar de registro de la asociación, fundación..."
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Número de registro:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="orgLicense"
                  value={this.state.orgLicense}
                  placeholder="Número de registro"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <button className="button is-link" onClick={() => this.props.handleUpdateSubmit(this.state)} type="submit">Actualizar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
