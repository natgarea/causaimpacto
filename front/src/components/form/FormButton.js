import React, { Component } from 'react'

export default class FormButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonClass: "button is-link"
        }
    } 
    toggleClass() {
        this.setState({ buttonClass: "button is-link is-loading" });
    }
    render() {
        return (
            <div>
                <button className={this.state.buttonClass} onClick={() => this.toggleClass()} type="submit">{this.props.children}</button>
            </div>
        )
    }
}
