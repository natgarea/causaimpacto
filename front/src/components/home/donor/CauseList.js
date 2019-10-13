import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default class CauseList extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={this.props.image} alt={this.props.name} />
    </figure>
  </div>
  <div className="card-content">
    <div className="content">
    <p class="title is-4">{this.props.name}</p>
      <footer className="card-footer">
    <Link to="#" className="card-footer-item"><span className="icon is-medium">
                      <FontAwesomeIcon icon={faHeart} aria-hidden="true"/>
                      </span></Link>
  </footer>
    </div>
  </div>
</div>
    );
  }
}
