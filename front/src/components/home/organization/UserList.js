import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  render() {
    console.log(this.props.donors)
    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-content">
            <h3 className="title">Donantes</h3>
            <p>Los siguientes usuarios han dado consentimiento para ser contactados.</p>
            <ul>
        {Array.isArray(this.props.donors) ? this.props.donors.map((donor, i)=><li className="has-margin-1 donor-list" key={i}>
          <span className="is-bold">{donor.userFirstname} {donor.userSurname}</span> <a href={`mailto:${donor.email}`} className="button is-primary">Email</a>
        </li>):null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
