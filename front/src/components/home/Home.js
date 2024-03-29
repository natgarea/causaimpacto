import React, { Component } from "react";
import ProfileSettings from "./donor/ProfileSettings";
import SuggestedOrg from "./donor/SuggestedOrg";
import DonationList from "./donor/DonationList";
import Category from "./donor/Category";
import Notification from "../notification/Notification";
import OrganizationSettings from "./organization/OrganizationSettings";
import CampaignControls from "./organization/CampaignControls";
import UserList from "./organization/UserList";
import UserService from "../../services/UserService";
import DonationService from "../../services/DonationService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: this.props.userInSession,
      notification: null,
      prueba: "",
      category: [],
      index: 0,
      donations: [],
      donors: []
    };
    this.userService = new UserService();
    this.donationService = new DonationService();
  }

  componentDidMount() {
    this.getUserDonations()
    this.getDonors()
  }

  getDonors() {
    return this.donationService.getDonors().then(resp => {
      let userList = resp.filter(user => user.contactConsent).map(donation => donation.user);  
      this.setState({
        ...this.state,
        donors: userList
      });
    })
  }

  getUserDonations() {
    let organizations = this.userService
      .getOrgDonationsById();
    let campaigns = this.userService
      .getCampaignDonationsById();
    return Promise.all([organizations, campaigns])
      .then(data => {
        let Donations = [];
        let allDonations = Donations.concat(...data);
        allDonations.sort(function(a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        this.setState({
          ...this.state,
          donations: allDonations
        });
      })
      .catch(err => console.log(err));
  }

  static getDerivedStateFromProps(props, state) {
    if (!!props.userInSession) {
      let notification;
      props.userInSession.status === "active"
        ? (notification = true)
        : (notification = false);
      return (
        (state.loggedUser = props.userInSession),
        (state.notification = notification),
        (state.category = props.categoryList)
      );
    }
    return null;
  }

  toggleClass = () => this.setState({ notification: true });

  toggleInterest = id => {
    let interests = this.state.loggedUser.userInterests;

    if (interests.includes(id)) {
      interests.splice(interests.indexOf(id), 1);
    } else {
      interests.push(id);
    }

    let updatedUser = {
      ...this.state.loggedUser,
      userInterests: interests
    };

    this.setState({
      ...this.state,
      loggedUser: updatedUser
    });

    this.updateUser(updatedUser);
  };

  updateUser(updatedUserObj) {
    return this.userService
      .updateUser(updatedUserObj)
      .then()
      .catch();
  }

  handleCarousel(event) {
    if (!!event) {
      if (this.state.index >= 16) this.setState({ ...this.state, index: 0 });
      else this.setState({ ...this.state, index: this.state.index + 2 });
    } else {
      if (this.state.index <= 0) this.setState({ ...this.state, index: 16 });
      else this.setState({ ...this.state, index: this.state.index - 2 });
    }
  }

  render() {
    let { index, category } = this.state;
    if (this.props.userInSession) {
      if (this.state.loggedUser.type === "donor" && !!category[0]) {
        return (
          <div>
            <Notification
              toggleClass={this.toggleClass}
              notification={this.state.notification}
            />
            <div className="columns">
            <div className="column is-one-third">
              <ProfileSettings userData={this.state.loggedUser} />
              <div className="card">
                <div className="card-content">
                  <h3 className="title">Tus donaciones</h3>
                  <ul>
                    {Array.isArray(this.state.donations) ? (
                      <DonationList donations={this.state.donations} />
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
            <div className="column">
              <SuggestedOrg randomOrg={this.props.randomOrg} />
        
              <div className="card">
                <div className="card-content">
                  <h3 className="title">¿Qué causas te interesan?</h3>
                  <div className="columns categories">
                    <div className="column is-1">
                      <button
                        className="button is-primary"
                        onClick={() => this.handleCarousel(false)}
                      >
                        <span className="icon is-large">
                          <FontAwesomeIcon
                            icon={faArrowLeft}
                            aria-hidden="true"
                            size="2x"
                          />
                        </span>
                      </button>
                    </div>
        
                    <Category
                      key={index}
                      id={category[index]._id}
                      name={category[index].name}
                      image={category[index].image}
                      userData={this.state.loggedUser}
                      toggleInterest={this.toggleInterest}
                    ></Category>
                    <Category
                      key={index + 1}
                      id={category[index + 1]._id}
                      name={category[index + 1].name}
                      image={category[index + 1].image}
                      userData={this.state.loggedUser}
                      toggleInterest={this.toggleInterest}
                    ></Category>
        
                    <div className="column is-1">
                      <button
                        className="button is-primary"
                        onClick={() => this.handleCarousel(true)}
                      >
                        <span className="icon is-large">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            aria-hidden="true"
                            size="2x"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
        
      } else {
        return (
          <div>
            <Notification
              toggleClass={this.toggleClass}
              notification={this.state.notification}
            />
            <div className="columns">
              <OrganizationSettings userData={this.state.loggedUser} />
            </div>
            <div className="columns">
            {Array.isArray(this.state.donors) ? (
                        <UserList donors={this.state.donors} />
                      ) : null}
              <CampaignControls userData={this.state.loggedUser} />
            </div>
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  }
}
