import React, { Component } from "react";

export default class CampaignBlurb extends Component {
  render() {
    return (<div className="card column is-3 has-margin-3">
        <div className="card-image">
    <figure className="image is-4by3">
      <img src={this.props.image} alt={this.props.title} />
    </figure>
  </div>
  <div className="card-content">
    <div className="content">
    <p className="title is-4">{this.props.title}</p>
    </div>
  </div>
  </div>);
  }
}
