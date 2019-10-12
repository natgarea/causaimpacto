import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Búsqueda" />
          </div>
          <div className="control">
            <Link to="#" className="button is-info">Buscar</Link>
          </div>
        </div>
      </div>
    );
  }
}
