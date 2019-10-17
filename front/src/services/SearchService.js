import axios from "axios";

export default class SearchService {
  constructor() {
    this.URL = process.env.REACT_APP_API_URL + "/api/search";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  getSearchResults(searchTerm) {
    return this.service
      .get(`/${searchTerm}`)
      .then(res => res.data);
  }
}