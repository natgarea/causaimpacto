import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CampaignBlurb extends Component {
  render() {
    return (
      <div className="card column is-3">
        <div className="card-content blurb">
          <div className="content">
            <figure className="image">
              <img
                className="blurb-image"
                src={this.props.image}
                alt={this.props.title}
              />
            </figure>
          </div>
          <div className="content blurb-text-size">
            <p className="title is-4">{this.props.title}</p>
          </div>
          <Link
              to={`/campaign/${this.props.id}`}
              className="button is-primary is-fullwidth final"
            >
              Ver campaña
            </Link>
        </div>
      </div>
    );
  }
}
