import React, { Component } from "react";

export default class UserList extends Component {
  render() {
    return (
      <div className="column is-one-third">
        <div className="card">
          <div className="card-content">
            <h3 className="title">Donantes</h3>
            <p>Los siguientes usuarios han dado consentimiento para ser contactados.</p>
            {/* Lista de contactos, posible integración con Hangouts */}
          </div>
        </div>
      </div>
    );
  }
}
