import axios from "axios";

export default class CategoryService {
  constructor() {
    this.URL =  process.env.REACT_APP_API_URL + "/api/category";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  getCategories = () => {
    return this.service.get("/").then(response => response.data);
  };

}