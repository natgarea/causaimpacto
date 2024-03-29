import axios from "axios";

export default class UserService {
  constructor() {
    this.URL = process.env.REACT_APP_API_URL + "/api/user";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  getOrg = () => {
    return this.service.get("/").then(response => response.data);
  };

  updateUser = updatedUserObj => {
    return this.service
      .put(`/update/${updatedUserObj._id}`, updatedUserObj)
      .then(response => response.data);
  };

  handleUpload(theFile) {
    return this.service.post("/upload", theFile).then(res => res.data);
  }

  getUser = id => {
    return this.service.get(`/${id}`).then(response => response.data);
  };

  getOrgDonationsById = () => {
    return this.service.get("/o/donations").then(response => response.data);
  };

  getCampaignDonationsById = () => {
    return this.service.get("/c/donations").then(response => response.data);
  };

  getCampaignDonationsById = () => {
    return this.service.get("/c/donations").then(response => response.data);
  };

  getOrgByCategory = categoryId => {
    return this.service.get(`/category/${categoryId}`).then(response => response.data);
  }

}
