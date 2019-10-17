import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchService from "../services/SearchService";
import CategoryService from "../services/CategoryService";


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      results: []
    };
    this.service = new SearchService();
    this.categoryService = new CategoryService();
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
    }, () => this.handleSubmit(this.state.searchTerm));
    // if (this.state.searchTerm.length >= 3) {
      
    // }
    
  };

  render() {
    console.log(this.state.results);
    return (
        <React.Fragment>
      <div className="main-search has-margin-2">
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
              {this.state.results.length > 0 && 
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  {this.state.results.map((result, i) => (
                  <Link to={result.uri} class="dropdown-item">
                    {result.title}
    </Link>))}
                </div>
              </div>
              }
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

      <div className="main-category has-margin-4">
                    <h3 className="title">Busca por categoría</h3>
      </div>
      </React.Fragment>
    );
  }
}
