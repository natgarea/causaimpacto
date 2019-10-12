import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: true,
      expand: faAngleDown,
      cardClass: "card-content hide"
    };
  }

  toggleCardClass() {
    if (!this.state.openTab) {
        this.setState({
            openTab: true,
            expand: faAngleDown,
            cardClass: "card-content hide"})
    } else {
        this.setState({
            openTab: false,
            expand: faAngleUp,
            cardClass: "card-content"
        })
    }
  }

  render() {
    return (
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Logo</p>
          <Link to="#" onClick={() => this.toggleCardClass()}>
            <span class="icon is-medium has-margin-right-top"><FontAwesomeIcon icon={this.state.expand} aria-hidden="true"/></span>
          </Link>
        </header>
        <div className={this.state.cardClass}>
          <form></form>
        </div>
      </div>
    );
  }
}
ƒ;
