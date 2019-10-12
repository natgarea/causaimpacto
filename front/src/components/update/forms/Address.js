import React, { Component } from "react";

export default class Address extends Component {
  render() {
    return (
      <div className="card has-margin-2">
        <header className="card-header">
          <p className="card-header-title">Dirección</p>
          <Link to="#" className="card-header-icon" aria-label="more options">
            <span className="icon">expandir</span>
          </Link>
        </header>
        <div className="card-content">
          <div className="content">
            <p>
              Los datos de esta sección
              <span className="txt-is-orange is-bold">
                NO serán visibles en tu perfil
              </span>
              .
            </p>
            <form>
              <div className="field">
                <label className="label">Línea 1:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="line1"
                    value={this.state.loggedInUser.address.line1}
                    placeholder="Calle..."
                    onChange={e => this.handleAddressChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Línea 2:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="line2"
                    value={this.state.loggedInUser.address.line2}
                    placeholder="Piso/Escalera..."
                    onChange={e => this.handleAddressChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Ciudad:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                    value={this.state.loggedInUser.address.city}
                    onChange={e => this.handleAddressChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Provincia:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="stateOrProvince"
                    placeholder="Provincia"
                    value={this.state.loggedInUser.address.stateOrProvince}
                    onChange={e => this.handleAddressChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Código postal:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="postalCode"
                    placeholder="Código Postal"
                    value={this.state.loggedInUser.address.postalCode}
                    onChange={e => this.handleAddressChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">País:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="country"
                    placeholder="País"
                    value={this.state.loggedInUser.address.country}
                    onChange={e => this.handleAddressChange(e)}
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
