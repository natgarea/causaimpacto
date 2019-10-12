import React, { Component } from "react";
import FullName from "./forms/FullName";
import UpdateService from "./UpdateService";

export default class Update extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.updateService = new UpdateService();
  }

  handleUpdateSubmit = updateFormValues => {
    let updatedUser ={ ...this.props.userInSession, 
      userFirstname: updateFormValues.userFirstname,
      userSurname: updateFormValues.userSurname
    }

    this.updateUser(updatedUser);
  }

  updateUser(updatedUserObj) {
    return this.updateService.updateUser(updatedUserObj).then().catch();
  }

  render() {
    if (this.props.userInSession) {
      if (this.props.userInSession.type === "donor") {
        return (
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title">Actualiza tus datos</h1>
              <div>
                <ul>
                  <li>
                    Despliega cada sección haciendo click en la pestaña en la
                    esquina superior derecha.
                  </li>
                  <li>
                    Cumplimenta solo aquellos campos que quieras actualizar.
                  </li>
                </ul>
              </div>
              <FullName
                firstname={this.props.userInSession.userFirstname}
                surname={this.props.userInSession.userSurname}
                handleUpdateSubmit={this.handleUpdateSubmit}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <h1>Hola Org</h1>
          </div>
        );
      }
    } else {
      return <h1>Redirecciona a login</h1>;
    }
  }
}
