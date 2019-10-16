import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default class FullName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstname: props.firstname,
      userLastname: props.surname,
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
          <p className="card-header-title">Nombre completo</p>
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
                <label className="label">Nombre:</label>
                <div className="control">
                  <input
                    className="input"
                    name="userFirstname"
                    type="text"
                    value={this.state.userFirstname}
                    placeholder="Nombre"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Apellidos:</label>
                <div className="control">
                  <input
                    className="input"
                    name="userLastname"
                    type="text"
                    value={this.state.userLastname}
                    placeholder="Apellidos"
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
