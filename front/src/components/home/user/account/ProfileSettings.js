import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProfileSettings extends Component {
  render() {
    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-content">
            <h2 className="title">
              Perfil de{" "}
              <span className="txt-is-blue">
                {this.props.userData.username}
              </span>
            </h2>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img
                    className = "is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                    alt={this.props.userData.userFirstname}
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.userData.userFirstname}</p>
                <p className="subtitle is-6">@{this.props.userData.username}</p>
              </div>
            </div>
          </div>
          <div className="card-content">
          <Link to="/home/updateData" className="button is-link">Actualiza tus datos</Link>
          <Link to="#" className="button is-link">Actualiza tu contraseña</Link>
          <Link to="#" className="button is-link">Actualiza tu foto</Link>
          <Link to="#" className="button is-link">Desactiva tu cuenta</Link>
          </div>
        </div>
      </div>
    );
  }
}
