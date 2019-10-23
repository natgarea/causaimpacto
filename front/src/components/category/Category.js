import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserService from '../../services/UserService';
import CategoryService from '../../services/CategoryService';

export default class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: "",
            organizations: []
        }
        this.service = new UserService();
        this.categoryService = new CategoryService();
    }
    componentDidMount(){
        this.getOrgByCategory();
        this.getCategoryById();
    }
    getOrgByCategory(){
        return this.service.getOrgByCategory(this.props.match.params.id).then(response =>
            {this.setState({
                ...this.state,
                organizations: response
            })}
        )
    }
    getCategoryById() {
        console.log(this.props.match.params.id)
        return this.categoryService.getCategoryById(this.props.match.params.id)
        .then(response => {
            console.log(response)
            this.setState({
            ...this.state,
            category: response.name
        })})
    }
    render() {
        return (
            <div>
                <h3 className="title">Organizaciones en <span className="txt-is-orange">{this.state.category}</span></h3>
                <ul>
                    {this.state.organizations.map((org,i) => (
                    <li className="has-margin-2" key={i} >
                         <Link to={`/profile/${org._id}`} alt={org.orgName}>{org.orgName}</Link>
                    </li>))}
                </ul>
            </div>
        )
    }
}
