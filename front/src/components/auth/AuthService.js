import axios from "axios";

export default class AuthService {
  constructor() {
    this.URL =  "http://localhost:5000/api/auth";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  signup = (type, username, email, password) => {
    return this.service
      .post("/signup", { type, username, email, password })
      .then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/currentUser").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => response.data);
  };
}