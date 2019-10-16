import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDonate} from "@fortawesome/free-solid-svg-icons";

export default class Campaign extends Component {
    render() {
        return (
            <div>
                 <Link
                      to={"/donate/c/" + this.props.match.params.id}
                      className="button is-large is-primary is-fullwidth"
                    >
                      <span className="icon is-medium" aria-hidden="true">
                        <FontAwesomeIcon icon={faDonate} aria-hidden="true" />
                      </span>
                      <span>Donar</span>
                    </Link>
            </div>
        )
    }
}
