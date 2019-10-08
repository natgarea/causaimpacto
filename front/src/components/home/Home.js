import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div class="contents">
              <h2>Welcome {this.props.userInSession.username} - Ironhacker</h2>
            </div>
        )
    }
}
