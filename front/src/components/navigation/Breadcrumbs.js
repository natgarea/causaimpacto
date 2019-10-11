import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link href="#">{this.props.match.params}</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
