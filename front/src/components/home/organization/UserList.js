import React, { Component } from "react";

export default class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      donors: this.props.donors
    
    }
  }

  render() {
    let obj = {};
    for (let i=0; i < this.props.donors.length; i++) { obj[this.props.donors[i]['_id']] = this.props.donors[i]; }
    let donors = [];
    for ( var key in obj )
    donors.push(obj[key]);

    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-content">
            <h3 className="title">Donantes</h3>
            <p>Los siguientes usuarios han dado su consentimiento para ser contactados.</p>
            <ul>
        {Array.isArray(this.props.donors) ? donors.map((donor, i)=><li className="has-margin-1 donor-list" key={i}>
          <span className="is-bold">{donor.userFirstname} {donor.userSurname}</span> <a href={`mailto:${donor.email}`} className="button is-primary">Email</a>
        </li>):null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
