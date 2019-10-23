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
    this.setState(
      {
        ...this.state,
        [name]: value
      },
      () => this.handleSubmit(this.state.searchTerm)
    );
  };

  render() {
    console.log(this.state.results);
    return (
      <React.Fragment>
        <div className="main">
          <div className="align-items-center">
            <div className="align-items-center main-text">
              <img src="./images/logo.png" alt="logo" />
              <p className="has-margin-3">
                <h3 className="title is-3">
                  ¿Alguna vez has querido ayudar a otros pero no sabías cómo?
                </h3>{" "}
                <span className="txt-is-orange is-bold">causa</span>
                <span className="txt-is-blue is-bold">impacto</span> pretende
                conectar a personas como tú con organizaciones que ayudan a
                individuos en situaciones difíciles o de emergencia.
              </p>
              <p>Comienza a buscar organizaciones y campañas de tu interés:</p>
            </div>
            <div className="main-search">
              <div className="field has-addons">
                <div className="control">
                  <div className="dropdown is-active">
                    <div className="dropdown-trigger">
                      <input
                        className="input search-input"
                        type="text"
                        value={this.state.searchTerm}
                        placeholder="Busca una organización o campaña"
                        name="searchTerm"
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    {this.state.results.length > 0 && (
                      <div
                        className="dropdown-menu"
                        id="dropdown-menu"
                        role="menu"
                      >
                        <div className="dropdown-content d-main">
                          {this.state.results.map((result, i) => (
                            <Link to={result.uri} className="dropdown-item">
                              {result.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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
          </div>
          <div>
            <div className="main-category has-margin-4 categories">
              <h3 className="title is-4">Busca por categoría</h3>
              <div className="categories">
                {this.props.categoryList.map((category, i) => (
                  <div className="category-main column is-one-fifth" key={i}>
                    <Link to={`/category/${category._id}`}>
                      <img
                        src={category.image}
                        className="category-img has-margin-1"
                        alt={category.name}
                      />{" "}
                      <h5 className="title is-6">{category.name}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
