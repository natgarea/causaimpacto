import React, { Component } from 'react';
import UserService from "../../services/UserService";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        
        this.userService = new UserService();
        console.log(this.props.match.params.id)
        this.state = {
            profile: this.userService.getUser(this.props.match.params.id)
        }
    }



    render() {
        if (this.state.profile.type === "donor") {
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Org</h1>
            </div>
        )
        }
    }
}
