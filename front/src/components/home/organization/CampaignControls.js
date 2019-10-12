import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CampaignControls extends Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <h3 className="title">Gestionar campañas</h3>
              <Link to="#" className="button is-primary is-large">Crear nueva campaña</Link>
            <h3 className="title">Campañas activas</h3>
            {/* Lista simple de enlaces a campañas activas */}
            <Link to="#" className="button is-primary">Editar campaña</Link>
            <Link to="#" className="button is-primary">Borrar campaña</Link>
          </div>
        </div>
      </div>
    );
  }
}
