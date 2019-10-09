import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Búsqueda" />
          </div>
          <div class="control">
            <Link class="button is-info">Buscar</Link>
          </div>
        </div>
      </div>
    );
  }
}
