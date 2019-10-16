import axios from "axios";

export default class CampaignService {
  constructor() {
    this.URL = process.env.REACT_APP_API_URL + "/api/campaign";
    this.service = axios.create({
      baseURL: this.URL,
      withCredentials: true
    });
  }

  // addCampaign = CampaignObj => {
  //   return this.service
  //   .post("/", CampaignObj)
  //   .then(response => response.data);
  // };

  getOrgCampaigns = UserObjId => {
    return this.service
      .get(`/o/${UserObjId}`)
      .then(response => response.data);
  };

  getCampaign = CampaignId => {
    return this.service
    .get(CampaignId)
    .then(response => response.data)
  };

  updateCampaign = (campaignId, CampaignObj) => {
    return this.service
    .put(`/update/${campaignId}`, CampaignObj)
    .then(response => response.data);
  };

  handleUpload(theFile) {
    return this.service.post("/upload", theFile).then(res => res.data);
  }

}
