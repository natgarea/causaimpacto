import React, { Component } from "react";
import moment from "moment";

export default class Comment extends Component {
  render() {
    return (
      <div className="card column comments">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                {this.props.anonymous ? (
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Anónimo"
                  />
                ) : (
                  <img src={this.props.image} alt={this.props.firstname} />
                )}
              </figure>
            </div>
            <div className="media-content">
              {this.props.anonymous ? (
                <p className="title is-5">Anónimo</p>
              ) : (
                <p className="title is-4">
                  {this.props.firstname} {this.props.surname}
                </p>
              )}
              <p>
                Ha donado {this.props.amount}€<br />
                <time>{moment(this.props.date).format("DD/MM/YYYY")}</time>
              </p>
            </div>
          </div>

          <div className="content">{this.props.comment}</div>
        </div>
      </div>
    );
  }
}
