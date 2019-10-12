import React, { Component } from 'react';

export default class FormButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonClass: "button is-link is-fullwidth is-normal"
        }
    } 
    toggleClass() {
        this.setState({ buttonClass: "button is-link is-fullwidth is-normal is-loading" });
    }
    render() {
        return (
            <div>
                <button className={this.state.buttonClass} onClick={() => this.toggleClass()} type="submit">{this.props.children}</button>
            </div>
        )
    }
}
