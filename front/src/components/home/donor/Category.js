import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Category extends Component {
  constructor(props){
    super(props);
    let categorySelected = this.props.userData.userInterests.includes(this.props.id)
    let buttonSelected, buttonClass;
    if (categorySelected) {
      buttonSelected = true;
      buttonClass = "button is-primary"
    } else {
      buttonSelected = false;
      buttonClass = "button is-outlined"
    }
    this.state = {
      buttonSelected: buttonSelected,
      buttonClass: buttonClass
    }
  }

  toggleButtonClass() {
    if(!this.state.buttonSelected) {
      this.setState({
        buttonSelected: true,
        buttonClass: "button is-primary"
      })
    } else {
      this.setState({
        buttonSelected: false,
        buttonClass: "button is-outlined"
      })
    }

    this.props.toggleInterest(this.props.id)
  }

  render() {
    
    return (
      <div className="column category is-5">
        <div className="align-items-center">
          <figure className="image is-96x96">
            <img src={this.props.image} alt={this.props.name} />
          </figure>
        </div>
        
          <div className="align-items-center">
            <p className="title is-4">{this.props.name}</p>

            <button id={this.props.id} className={this.state.buttonClass} onClick={() => this.toggleButtonClass()}>
              <span className="icon is-medium">
                <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      
    );
  }
}
