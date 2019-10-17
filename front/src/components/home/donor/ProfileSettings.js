import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit, faUserSlash } from '@fortawesome/free-solid-svg-icons';

export default class ProfileSettings extends Component {
  render() {
    return (
        <div className="card has-margin-2">
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
                    className="is-rounded"
                    src={this.props.userData.image ? this.props.userData.image : "https://bulma.io/images/placeholders/128x128.png"}
                    alt={this.props.userData.userFirstname}
                  />
                </figure>
              </div>
              <div className="media-content">
                {this.props.userData.userFirstname && this.props.userData.userSurname ? 
                  <div><p className="title is-4">{this.props.userData.userFirstname} {this.props.userData.userSurname}</p>
                  <p className="subtitle is-6">@{this.props.userData.username}</p>
                  </div> :
                  <p className="title is-4">@{this.props.userData.username}</p>
              }
              </div>
            </div>
          </div>
          <div className="card-content">
          <div className="buttons">
          <Link to={`/profile/${this.props.userData._id}`} className="button is-link"><span className="icon is-medium" aria-hidden="true">
            <FontAwesomeIcon icon={faUser} aria-hidden="true"/>
            </span> <span>Perfil público</span></Link>
          <Link to='/update' className="button is-link">
          <span className="icon is-medium" aria-hidden="true">
            <FontAwesomeIcon icon={faEdit} aria-hidden="true"/>
            </span> <span>Actualiza tu perfil</span></Link>
          <Link to="#" className="button is-danger"><span className="icon is-medium" aria-hidden="true"><FontAwesomeIcon icon={faUserSlash} aria-hidden="true"/>
            </span> <span>Desactiva tu cuenta</span></Link>
          </div>
          </div>
        </div>
    );
  }
}
