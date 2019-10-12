import React, { Component } from "react";

export default class OrganizationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: props.name,
      orgDescription: props.description,
      orgRegistrar: props.registrar,
      orgLicense: props.license
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <div className="card has-margin-2">
        <header className="card-header">
          <p className="card-header-title">Datos de la organización</p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">expandir</span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
              <form>
            <div className="field">
              <label className="label">Nombre:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="orgName"
                  value={this.state.orgName}
                  placeholder="Nombre"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Descripción:</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="orgDescription"
                  onChange={e => this.handleChange(e)}
                  value={this.state.orgDescription}
                  placeholder="Descripción breve de la misión, los valores y los objetivos de la organización."
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Lugar de registro:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="orgRegistrar"
                  value={this.state.orgRegistrar}
                  placeholder="Lugar de registro de la asociación, fundación..."
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Número de registro:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="orgLicense"
                  value={this.state.orgLicense}
                  placeholder="Número de registro"
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
            <button className="button is-link" onClick={() => this.props.handleUpdateSubmit(this.state)} type="submit">Actualizar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
