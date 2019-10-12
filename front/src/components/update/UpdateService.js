import axios from "axios";

export default class UpdateService {
  constructor() {
    this.URL = "http://localhost:5000/api/user";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  updateUser = updatedUserObj => {
    return this.service
      .put("/update", updatedUserObj)
      .then(response => response.data);
  };

  // updateDonor = (username, userFirstname, userSurname, address) => {
  //   return this.service
  //     .put("/updateDonor", { username, userFirstname, userSurname, address })
  //     .then(response => response.data);
  // };

  // updateOrganization = (username, orgName, orgDescription, orgContactPerson, orgTelephone, orgEmail, address, orgUrl, orgLicense, orgRegistrar) => {
  //   return this.service
  //     .put("/updateOrganization/", { username, orgName, orgDescription, orgContactPerson, orgTelephone, orgEmail, address, orgUrl, orgLicense, orgRegistrar })
  //     .then(response => response.data);
  // };
}
