import React, { Component } from "react";
import Address from "./forms/Address";
import FullName from "./forms/FullName";
import OrganizationContact from "./forms/OrganizationContact";
import OrganizationDetails from "./forms/OrganizationDetails";
import UpdateService from "../../services/UpdateService";
import Image from "./forms/Image";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateService = new UpdateService();
  }

  handleAddressSubmit = updateFormValues => {
    let updatedUser = {
      ...this.props.userInSession,
      address: { ...updateFormValues }
    };

    this.updateUser(updatedUser);
  };

  handleFullNameSubmit = updateFormValues => {
    let updatedUser = {
      ...this.props.userInSession,
      userFirstname: updateFormValues.userFirstname,
      userSurname: updateFormValues.userSurname
    };

    this.updateUser(updatedUser);
  };

  handleOrgContactSubmit = updateFormValues => {
    let updatedUser = {
      ...this.props.userInSession,
      orgContactPerson: updateFormValues.orgContactPerson,
      orgTelephone: updateFormValues.orgTelephone,
      orgEmail: updateFormValues.orgEmail,
      orgUrl: updateFormValues.orgUrl
    };

    this.updateUser(updatedUser);
  };

  handleOrgDetailsSubmit = updateFormValues => {
    let updatedUser = {
      ...this.props.userInSession,
      orgName: updateFormValues.orgName,
      orgDescription: updateFormValues.orgDescription,
      orgRegistrar: updateFormValues.orgRegistrar,
      orgLicense: updateFormValues.orgLicense
    };

    this.updateUser(updatedUser);
  };

  handleImageSubmit = imageUrl => {
    let updatedUser = {
      ...this.props.userInSession,
      image: imageUrl
    };

    this.updateUser(updatedUser);
  };

  updateUser(updatedUserObj) {
    return this.updateService
      .updateUser(updatedUserObj)
      .then()
      .catch();
  }

  render() {
    if (this.props.userInSession) {
      if (this.props.userInSession.type === "donor") {
        return (
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title">Actualiza tus datos</h1>
              <div>
                <p>
                  Despliega cada sección haciendo click en la esquina superior
                  derecha. Cumplimenta solo aquellos campos que quieras
                  actualizar.
                </p>
              </div>
              <Image
                title="Imagen de perfil"
                handleUpdateSubmit={this.handleImageSubmit}
              />
              <FullName
                firstname={this.props.userInSession.userFirstname}
                surname={this.props.userInSession.userSurname}
                handleUpdateSubmit={this.handleFullNameSubmit}
              />
              <Address
                line1={this.props.userInSession.address.line1}
                line2={this.props.userInSession.address.line2}
                city={this.props.userInSession.address.city}
                stateOrProvince={
                  this.props.userInSession.address.stateOrProvince
                }
                postalCode={this.props.userInSession.address.postalCode}
                country={this.props.userInSession.address.country}
                handleUpdateSubmit={this.handleAddressSubmit}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title">Actualiza tus datos</h1>
              <div>
                <p>
                  Despliega cada sección haciendo click en la esquina superior
                  derecha. Cumplimenta solo aquellos campos que quieras
                  actualizar.
                </p>
              </div>
              <Image
                title="Logo de la organización"
                handleUpdateSubmit={this.handleImageSubmit}
              />
              <OrganizationDetails
                name={this.props.userInSession.orgName}
                description={this.props.userInSession.orgDescription}
                registrar={this.props.userInSession.orgRegistrar}
                license={this.props.userInSession.orgLicense}
                handleUpdateSubmit={this.handleOrgDetailsSubmit}
              />
              <Address
                line1={this.props.userInSession.address.line1}
                line2={this.props.userInSession.address.line2}
                city={this.props.userInSession.address.city}
                stateOrProvince={
                  this.props.userInSession.address.stateOrProvince
                }
                postalCode={this.props.userInSession.address.postalCode}
                country={this.props.userInSession.address.country}
                handleUpdateSubmit={this.handleAddressSubmit}
              />
              <OrganizationContact
                contactPerson={this.props.userInSession.orgContactPerson}
                telephone={this.props.userInSession.orgTelephone}
                email={this.props.userInSession.orgEmail}
                url={this.props.userInSession.orgUrl}
                handleUpdateSubmit={this.handleOrgContactSubmit}
              />
            </div>
          </div>
        );
      }
    } else {
      return <h1>Redirecciona a login</h1>;
    }
  }
}
