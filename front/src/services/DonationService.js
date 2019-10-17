import axios from "axios";

export default class DonationService {
  constructor() {
    this.URL = process.env.REACT_APP_API_URL + "/api/donation";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  addOrgDonation(donation) {
    let donorId = donation.user;
    let orgId = donation.org;
    return this.service
      .post(`/o/${donorId}/${orgId}`, donation)
      .then(res => res.data);
  }

  addCampaignDonation(donation) {
    let donorId = donation.user;
    let campaignId = donation.campaign;
    return this.service
      .post(`/c/${donorId}/${campaignId}`, donation)
      .then(res => res.data);
  }

  addComment(donationId, comment) {
    return this.service.put(`/comment/${donationId}`, { comment: comment }).then(res => res.data);
  }

  getDonors() {
    return this.service.get("/").then(res => res.data);
  }

  getOrgDonations(idOrg) {
    return this.service.get(`/o/${idOrg}`).then(res => res.data);
  }

  getCampaignDonations(idCampaign) {
    return this.service.get(`/c/${idCampaign}`).then(res => res.data);
  }
}
