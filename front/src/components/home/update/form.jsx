if (this.props.userInSession.type === "donor") {
  return (
    <div className="columns is-centered">
      <div className="column">
        <h1 className="title">Actualiza tus datos</h1>
        <p>
          Este formulario está divido en secciones, puedes cumplimentar solo
          aquellas que quieras actualizar.
        </p>
        <hr />
        <h3 className="title is-5">Nombre y apellidos</h3>
        <p>
          Los datos de esta sección{" "}
          <span className="txt-is-orange is-bold">
            serán visibles en tu perfil
          </span>
          .
        </p>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Nombre:</label>
            <div className="control">
              <input
                className="input"
                name="userFirstname"
                type="text"
                value={this.state.loggedInUser.userFirstname}
                placeholder="Nombre"
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Apellidos:</label>
            <div className="control">
              <input
                className="input"
                name="userSurname"
                type="text"
                value={this.state.loggedInUser.userSurname}
                placeholder="Apellidos"
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
          <hr />
          <h3 className="title is-5">Dirección</h3>
          <p>
            Los datos de esta sección{" "}
            <span className="txt-is-orange is-bold">
              NO serán visibles en tu perfil
            </span>
            .
          </p>
          <div className="field">
            <label className="label">Línea 1:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="line1"
                value={this.state.loggedInUser.address.line1}
                placeholder="Calle..."
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Línea 2:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="line2"
                value={this.state.loggedInUser.address.line2}
                placeholder="Piso/Escalera..."
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Ciudad:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="city"
                placeholder="Ciudad"
                value={this.state.loggedInUser.address.city}
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Provincia:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="stateOrProvince"
                placeholder="Provincia"
                value={this.state.loggedInUser.address.stateOrProvince}
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Código postal:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="postalCode"
                placeholder="Código Postal"
                value={this.state.loggedInUser.address.postalCode}
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">País:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="country"
                placeholder="País"
                value={this.state.loggedInUser.address.country}
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <FormButton children="Actualizar" />
        </form>
      </div>
    </div>
  );
} else {
  return (
    <div className="columns is-centered">
      <div className="column">
        <h1 className="title">Actualiza los datos de la organización</h1>
        <p>
          Este formulario está divido en secciones, puede cumplimentar solo
          aquellas que quiera actualizar. Salvo que se indique lo contrario,
          estos datos serán visibles para los usuarios de la web.
        </p>
        <hr />
        <h3 className="title is-5">Datos de la organización</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Nombre:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="orgName"
                value={this.state.loggedInUser.orgName}
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
                value={this.state.loggedInUser.orgDescription}
                placeholder="Describa brevemente la misión, valores y objetivos de su organización."
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Lugar de registro:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="orgName"
                value={this.state.loggedInUser.orgRegistrar}
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
                name="orgName"
                value={this.state.loggedInUser.orgLicense}
                placeholder="Lugar de registro de la asociación, fundación..."
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
          <hr />
          <h3 className="title is-5">Datos de contacto</h3>
          <div className="field">
            <label className="label">Persona de contacto:</label>
            <div className="control">
              <input
                className="input"
                name="orgContactPerson"
                type="text"
                value={this.state.loggedInUser.orgContactPerson}
                placeholder="Nombre Apellidos"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <p className="help">Este campo no será visible públicamente.</p>
          </div>
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
          <hr />
          <h3 className="title is-5">Dirección</h3>
          <div className="field">
            <label className="label">Línea 1:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="line1"
                value={this.state.loggedInUser.address.line1}
                placeholder="Calle..."
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Línea 2:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="line2"
                value={this.state.loggedInUser.address.line2}
                placeholder="Piso/Escalera..."
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Ciudad:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="city"
                placeholder="Ciudad"
                value={this.state.loggedInUser.address.city}
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Provincia:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="stateOrProvince"
                placeholder="Provincia"
                value={this.state.loggedInUser.address.stateOrProvince}
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Código postal:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="postalCode"
                placeholder="Código Postal"
                value={this.state.loggedInUser.address.postalCode}
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">País:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="country"
                placeholder="País"
                value={this.state.loggedInUser.address.country}
                onChange={e => this.handleAddressChange(e)}
              />
            </div>
          </div>
          <FormButton children="Actualizar" />
        </form>
      </div>
    </div>
  );
}
