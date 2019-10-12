import React, { Component } from "react";

export default class OrganizationDetails extends Component {
  render() {
    return (
      <div className="card has-margin-2">
        <header className="card-header">
          <p className="card-header-title">Datos de la organización</p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">expandir</span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
              <form>
            <div className="field">
              <label className="label">Nombre:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="orgName"
                  value={this.state.loggedInUser.orgName}
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
                  value={this.state.loggedInUser.orgDescription}
                  placeholder="Describa brevemente la misión, valores y objetivos de su organización."
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Lugar de registro:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="orgName"
                  value={this.state.loggedInUser.orgRegistrar}
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
                  name="orgName"
                  value={this.state.loggedInUser.orgLicense}
                  placeholder="Lugar de registro de la asociación, fundación..."
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
