import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchService from "../services/SearchService";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: []
    };
    this.service = new SearchService();
  }

  handleSubmit = searchTerm => {
    this.service
      .getSearchResults(searchTerm)
      .then(response => {
        this.setState({
          ...this.state,
          results: response
        });
      })
      .catch(err => {
        this.setState({
          ...this.state,
          results: false
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
    if (this.state.searchTerm.length >= 3) {
      this.handleSubmit(this.state.searchTerm);
    }
  };

  render() {
    console.log(this.state.results);
    return (
      <div>
        <div className="field has-addons">
          <div className="control">
            <div class="dropdown is-active">
              <div class="dropdown-trigger">
                <input
                  className="input search-input"
                  type="text"
                  value={this.state.searchTerm}
                  placeholder="Busca una organización o campaña"
                  name="searchTerm"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  {this.state.results.map((result, i) => (
                  <Link to={result.uri} class="dropdown-item">
                    {result.title}
    </Link>))}
                </div>
              </div>
            </div>
          </div>
          <div className="control">
            <Link to="#" className="button is-info">
              <span className="icon is-medium">
                <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
