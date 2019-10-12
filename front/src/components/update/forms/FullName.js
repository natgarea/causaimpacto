import React, { Component } from 'react';
// import { Link } from "react-router-dom";

export default class FullName extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            userInSession: props.userInSession,
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState( { [name] : value } );

      };

    render() {
        return (
            <div className="card has-margin-2">
    <header className="card-header">
        <p className="card-header-title">
        Nombre completo
        </p>
        {/* <Link to="#" onClick={() => this.toggleCardClass()} className="card-header-icon" aria-label="more options"> */}
        {/* {this.state.expand} */}
        {/* </Link> */}
    </header>
    <div className="card-content">
    <div className="content">
        <form>
        <div className="field">
            <label className="label">Nombre:</label>
            <div className="control">
                <input
                className="input"
                name="userFirstname"
                type="text"
                // value={this.props.userInSession.userFirstname}
                placeholder="Nombre"
                onChange={e => this.handleChange(e)}
                />
            </div>
        </div>
        <div className="field">
            <label className="label">Apellidos:</label>
            <div className="control">
                <input
                className="input"
                name="userSurname"
                type="text"
                // value={this.props.userInSession.userSurname}
                placeholder="Apellidos"
                onChange={e => this.handleChange(e)}
                />
            </div>
        </div>
        <button className="button is-link" onClick={() => this.props.handleUpdateSubmit(this.state)} type="submit">Actualizar</button>
        </form>
        </div>
    </div>
</div>
        )
    }
}
