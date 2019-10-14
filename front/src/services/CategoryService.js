import axios from "axios";

export default class CategoryService {
  constructor() {
    this.URL =  process.env.API_URL + "/api/category";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  getCategories = () => {
    return this.service.get("/").then(response => response.data);
  };

}