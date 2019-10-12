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
      .put("/update/" + updatedUserObj._id, updatedUserObj)
      .then(response => response.data);
  };

}
