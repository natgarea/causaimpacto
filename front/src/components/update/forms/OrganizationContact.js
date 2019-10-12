import React, { Component } from 'react'

export default class OrganizationContact extends Component {
    render() {
        return (
            <div className="card has-margin-2">
    <header className="card-header">
        <p className="card-header-title">
        Datos de contacto
        </p>
    </header>
    <div className="card-content">
    <div className="content">
            <p className="help">Este campo no será visible públicamente.</p>
          <form>
          <div className="field">
            <label className="label">Teléfono público:</label>
            <div className="control">
              <input
                className="input"
                name="orgTelephone"
                type="text"
                value={this.state.loggedInUser.orgTelephone}
                placeholder="+34..."
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email público:</label>
            <div className="control">
              <input
                className="input"
                name="orgEmail"
                type="text"
                value={this.state.loggedInUser.orgEmail}
                placeholder="nombre@email.com"
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Dirección web:</label>
            <div className="control">
              <input
                className="input"
                name="orgUrl"
                type="text"
                value={this.state.loggedInUser.orgUrl}
                placeholder="www.tusitio.com"
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
          <button className="button is-link" onClick={() => this.props.handleUpdateSubmit(this.state)} type="submit">Actualizar</button>
        </form>
        </div>
    </div>
</div>
        )
    }
}
