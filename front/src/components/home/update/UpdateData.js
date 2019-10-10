import React, { Component } from "react";
import UserService from "../UserService";
import FormButton from "../../formButton/FormButton";


export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.userInSession.username,
      type: props.userInSession.type,
      userFirstname: props.userInSession.userFirstname,
      userSurname: props.userInSession.userSurname,
      address: {
        line1: null,
        line2: null,
        city: null,
        stateOrProvince: null,
        postalCode: null,
        country: null
      },
      orgName: props.userInSession.orgName,
      orgDescription: props.userInSession.orgDescription,
      orgContactPerson: props.userInSession.orgContactPerson,
      orgTelephone: props.userInSession.orgTelephone,
      orgEmail: props.userInSession.orgEmail,
      orgUrl: props.userInSession.orgUrl,
      orgLicense: props.userInSession.orgLicense,
      orgRegistrar: props.userInSession.orgRegistrar
    };
    this.service = new UserService();
  }

  componentDidMount() {
    this.checkForAddress(this.props);
  }

  checkForAddress = props => {
    if (props.userInSession.address)
      this.setState({ ...this.state, address: props.userInSession.address });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.type === "donor") {
      const { username, userFirstname, userSurname, address } = this.state;

      this.service
        .updateDonor(username, userFirstname, userSurname, address)
        .then(response => {
          this.setState({
            userFirstname: "",
            userSurname: "",
            address: ""
          });
        })
        .catch(error => {
          this.setState({
            userFirstname: userFirstname,
            userSurname: userSurname,
            address: address,
            error: true
          });
        });
    } else {
        const { username, orgName, orgDescription, orgContactPerson, orgTelephone, orgEmail, address, orgUrl, orgLicense, orgRegistrar } = this.state;


        this.service
        .updateOrganization(username, orgName, orgDescription, orgContactPerson, orgTelephone, orgEmail, address, orgUrl, orgLicense, orgRegistrar)
        .then(response => {
          this.setState({
            orgName: "",
            orgDescription: "",
            orgContactPerson: "",
            orgTelephone: "",
            orgEmail: "",
            address: "",
            orgUrl: "",
            orgLicense: "",
            orgRegistrar: ""
          });
        })
        .catch(error => {
          this.setState({
            orgName: orgName,
            orgDescription: orgDescription,
            orgContactPerson: orgContactPerson,
            orgTelephone: orgTelephone,
            orgEmail: orgEmail,
            address: address,
            orgUrl: orgUrl,
            orgLicense: orgLicense,
            orgRegistrar: orgRegistrar,
            error: true
          });
        });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddressChange = event => {
    const { name, value } = event.target;
    const address = { ...this.state.address }
    address[name] = value
    this.setState({
        ...this.state,
        address : address });
  };

  render() {
    if (this.props.userInSession.type === "donor") {
      return (
        <div className="columns is-centered">
          <div className="column">
            <h1 className="title">Actualiza tus datos</h1>
            <p>Este formulario está divido en secciones, puedes cumplimentar solo aquellas que quieras actualizar.</p>
            <hr/>
            <h3 className="title is-5">Nombre y apellidos</h3>
            <p>Los datos de esta sección <span className="txt-is-orange is-bold">serán visibles en tu perfil</span>.</p>
            <form onSubmit={this.handleFormSubmit}>
              <div className="field">
                <label className="label">Nombre:</label>
                <div className="control">
                  <input
                    className="input"
                    name="userFirstname"
                    type="text"
                    value={this.state.userFirstname ? this.state.userFirstname : ""}
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
                    value={this.state.userSurname ? this.state.userSurname : ""}
                    placeholder="Apellidos"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <hr />
              <h3 className="title is-5">Dirección</h3>
              <p>Los datos de esta sección <span className="txt-is-orange is-bold">NO serán visibles en tu perfil</span>.</p>
              <div className="field">
                <label className="label">Línea 1:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="line1"
                    value={this.state.address.line1 ? this.state.address.line1 : ""}
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
                    value={this.state.address.line2 ? this.state.address.line2 : ""}
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
                    value={this.state.address.city2 ? this.state.address.city2 : ""}
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
                    value={this.state.address.stateOrProvince ? this.state.address.stateOrProvince : ""}
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
                    value={this.state.address.postalCode ? this.state.address.postalCode : ""}
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
                    value={this.state.address.country ? this.state.address.country : ""}
                    onChange={e => this.handleAddressChange(e)}
                  />
                </div>
              </div>
              <FormButton children="Actualizar"/>
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
              aquellas que quiera actualizar. Salvo que se indique lo contrario, estos datos serán visibles para los usuarios de la web.
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
                    value={this.state.orgName ? this.state.orgName : ""}
                    placeholder="Nombre"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </div>
              <div className="field">
              <label className="label">Descripción:</label>
                <div className="control">
                  <textarea className="textarea"
                  name="orgDescription"
                  onChange={e => this.handleChange(e)}
                  value={this.state.orgDescription ? this.state.orgDescription : ""}
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
                    value={this.state.orgRegistrar ? this.state.orgRegistrar : ""}
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
                    value={this.state.orgLicense ? this.state.orgLicense : ""}
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
                    value={this.state.orgContactPerson ? this.state.orgContactPerson : ""}
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
                    value={this.state.orgTelephone ? this.state.orgTelephone : ""}
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
                    value={this.state.orgEmail ? this.state.orgEmail : ""}
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
                    value={this.state.orgUrl ? this.state.orgUrl : ""}
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
                          value={this.state.address.line1 ? this.state.address.line1 : ""}
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
                          value={this.state.address.line2 ? this.state.address.line2 : ""}
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
                          value={this.state.address.city2 ? this.state.address.city2 : ""}
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
                          value={this.state.address.stateOrProvince ? this.state.address.stateOrProvince : ""}
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
                          value={this.state.address.postalCode ? this.state.address.postalCode : ""}
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
                          value={this.state.address.country ? this.state.address.country : ""}
                          onChange={e => this.handleAddressChange(e)}
                        />
                      </div>
                    </div>
                    <FormButton children="Actualizar"/>
            </form>
          </div>
        </div>
      );      
    }
  }
}
