import axios from "axios";

export default class UserService {
  constructor() {
    this.URL = "http://localhost:5000/api/user";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  updateDonor = (username, userFirstname, userSurname, address) => {
    return this.service
      .put("/updateDonor", { username, userFirstname, userSurname, address })
      .then(response => response.data);
  };

  updateOrganization = (username, orgName, orgDescription, orgContactPerson, orgTelephone, orgEmail, address, orgUrl, orgLicense, orgRegistrar) => {
    return this.service
      .put("/updateOrganization/", { username, orgName, orgDescription, orgContactPerson, orgTelephone, orgEmail, address, orgUrl, orgLicense, orgRegistrar })
      .then(response => response.data);
  };
}
