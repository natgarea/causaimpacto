import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SuggestedOrg extends Component {
  render() {
    return (
        <div className="card has-margin-2">
          <div className="card-content">
            <h3 className="title">Quizá te interese...</h3>
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img
                    src={
                      this.props.randomOrg.image
                        ? this.props.randomOrg.image
                        : "https://bulma.io/images/placeholders/128x128.png"
                    }
                    alt={this.props.randomOrg.orgName}
                  />
                </figure>
              </div>
              <div className="media-content">
                <h5 className="title is-5 txt-is-orange">
                  {this.props.randomOrg.orgName}
                </h5>
                <p>{this.props.randomOrg.orgDescription}</p>
                <Link to={`/profile/${this.props.randomOrg._id}`} className="button is-primary is-fullwidth has-margin-2">Ver campañas actuales</Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
