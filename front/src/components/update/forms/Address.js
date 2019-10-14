import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default class Address extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      line1: props.line1,
      line2: props.line2,
      city: props.city,
      stateOrProvince: props.stateOrProvince,
      postalCode: props.postalCode,
      country: props.country,
      openTab: true,
      expand: faAngleDown,
      cardClass: "card-content hide"
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState( {
        ...this.state, 
        [name] : value
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
          <p className="card-header-title">Dirección</p>
          <Link to="#" onClick={() => this.toggleCardClass()}>
            <span className="icon is-medium has-margin-right-top"><FontAwesomeIcon icon={this.state.expand} aria-hidden="true"/></span>
          </Link>
        </header>
        <div className={this.state.cardClass}>
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
