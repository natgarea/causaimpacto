import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Búsqueda" />
          </div>
          <div class="control">
            <a class="button is-info">Buscar</a>
          </div>
        </div>
      </div>
    );
  }
}
