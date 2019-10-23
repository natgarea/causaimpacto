import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserService from '../../services/UserService';
import CategoryService from '../../services/CategoryService';
import "./style.css";

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
        return this.categoryService.getCategoryById(this.props.match.params.id)
        .then(response => {
            this.setState({
            ...this.state,
            category: response.name
        })})
    }
    render() {
        return (
            <div>
                <h3 className="title">Categoría: <span className="category-text">{this.state.category}</span></h3>
                <ul className="category-organizations">
                    {this.state.organizations.map((org,i) => (
                    <li className="has-margin-2" key={i} >
                        <div className="individual-organization">
                            <div className="organization-logo">
                         <Link to={`/profile/${org._id}`} alt={org.orgName}><img src={org.image} alt={org.orgName} /></Link>
                         </div>
                         <p><Link to={`/profile/${org._id}`} alt={org.orgName}>{org.orgName}</Link></p>
                         </div>
                    </li>))}
                </ul>
            </div>
        )
    }
}
