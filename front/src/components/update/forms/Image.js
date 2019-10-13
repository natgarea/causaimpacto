import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import UpdateService from "../../../services/UpdateService";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: true,
      expand: faAngleDown,
      cardClass: "card-content hide"
    };
    this.updateService = new UpdateService();
  }

  handleUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    this.updateService
      .handleUpload(uploadData)
      .then(response => {
        this.setState({ ...this.state, imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  toggleCardClass() {
    if (!this.state.openTab) {
      this.setState({
        openTab: true,
        expand: faAngleDown,
        cardClass: "card-content hide"
      });
    } else {
      this.setState({
        openTab: false,
        expand: faAngleUp,
        cardClass: "card-content"
      });
    }
  }

  render() {
    return (
      <div className="card has-margin-2">
        <header className="card-header">
          <p className="card-header-title">{this.props.title}</p>
          <Link to="#" onClick={() => this.toggleCardClass()}>
            <span className="icon is-medium has-margin-right-top">
              <FontAwesomeIcon icon={this.state.expand} aria-hidden="true" />
            </span>
          </Link>
        </header>
        <div className={this.state.cardClass}>
          <form>
            <div className="file">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  onChange={e => this.handleUpload(e)}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <FontAwesomeIcon icon={faUpload} aria-hidden="true" />
                  </span>
                  <span className="file-label">Selecciona un archivo...</span>
                </span>
              </label>
            </div>
            <div className={this.state.imageUrl ? "has-margin-1" : "hide"}>
              {" "}
              <figure className="image is-128x128">
                <img src={this.state.imageUrl} alt="Imagen subida" />
              </figure>
              <p>Si estás satisfecho con la imagen, pulsa "Actualizar".</p>
            </div>
            <button
              className="button is-link"
              onClick={() => this.props.handleUpdateSubmit(this.state.imageUrl)}
              type="submit"
            >
              Actualizar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
