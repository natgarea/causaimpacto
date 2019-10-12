import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class OrganizationSettings extends Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <h2 className="title txt-is-blue">
                {this.props.userData.orgName}
            </h2>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img
                    className="is-rounded"
                    src={this.props.userData.orgLogo}
                    alt={this.props.userData.orgName}
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">
                  {this.props.userData.userFirstname}
                </p>
                <p className="subtitle is-6">@{this.props.userData.username}</p>
              </div>
            </div>
          </div>
          <div className="card-content">
            {/* <Link to="/update" className="button is-link">
              Actualiza tu perfil
            </Link>
            <Link to="#" className="button is-link">
              Desactiva tu cuenta
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}
