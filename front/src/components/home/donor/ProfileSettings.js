import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default class ProfileSettings extends Component {
  render() {
    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-content">
            <h2 className="title">
              Tu perfil
            </h2>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded is-128x128"
                    src={this.props.userData.image ? this.props.userData.image : "https://bulma.io/images/placeholders/128x128.png"}
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
          <div className="buttons">
          <Link to="#" className="button is-link">Perfil público</Link>
          <Link to='/update' className="button is-link">
          <span className="icon is-medium" aria-hidden="true">
            <FontAwesomeIcon icon={faEdit} aria-hidden="true"/>
            </span>Actualiza tu perfil</Link>
          <Link to="#" className="button is-link">Desactiva tu cuenta</Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
