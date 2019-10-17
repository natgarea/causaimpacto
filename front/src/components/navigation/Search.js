import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Search extends Component {
  render() {
    return (
      <div>
        <form>
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Búsqueda" />
          </div>
          <div className="control">
            <Link to="#" className="button is-info"><span className="icon is-medium"><FontAwesomeIcon icon={faSearch} aria-hidden="true"/></span></Link>
          </div>
        </div>
        </form>
      </div>
    );
  }
}
