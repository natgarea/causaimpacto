import React, { Component } from "react";

export default class Notification extends Component {
  render() {
    return (
      <div
        className={this.props.notification ? "hide" : "notification is-warning"}
      >
        <button className="delete" onClick={() => this.props.toggleClass()}></button>
        <p>
          Te hemos enviado un email para que verifiques tu cuenta. Por favor,
          comprueba tu correo y haz click en el enlace enviado.
        </p>
      </div>
    );
  }
}
