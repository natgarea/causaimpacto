import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Address extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      line1: props.line1,
      line2: props.line2,
      city: props.city,
      stateOrProvince: props.stateOrProvince,
      postalCode: props.postalCode,
      country: props.country
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState( {
        ...this.state, 
        [name] : value
    });
    console.log(this.state)
  };

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
            <form>
              <div className="field">
                <label className="label">Línea 1:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="line1"
                    value={this.state.line1}
                    placeholder="Calle..."
                    onChange={e => this.handleChange(e)}
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
                    value={this.state.line2}
                    placeholder="Piso/Escalera..."
                    onChange={e => this.handleChange(e)}
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
                    value={this.state.city}
                    onChange={e => this.handleChange(e)}
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
                    value={this.state.stateOrProvince}
                    onChange={e => this.handleChange(e)}
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
                    value={this.state.postalCode}
                    onChange={e => this.handleChange(e)}
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
                    value={this.state.country}
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
