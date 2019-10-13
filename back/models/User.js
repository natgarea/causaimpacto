const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  type: {
    type: String,
    enum: ["donor", "organization"],
    default: "donor"
  },
  username: {type: String, default: ""},
  password: {type: String, default: ""},
  email: {type: String, default: ""},
  userFirstname: {type: String, default: ""},
  userSurname: {type: String, default: ""},
  image: {type: String, default: ""},
  orgName: {type: String, default: ""},
  orgDescription: {type: String, default: ""},
  orgContactPerson: {type: String, default: ""},
  orgTelephone: {type: String, default: ""},
  orgEmail: {type: String, default: ""},
  address: {
    line1: {type: String, default: ""},
    line2: {type: String, default: ""},
    city: {type: String, default: ""},
    stateOrProvince: {type: String, default: ""},
    postalCode: {type: String, default: ""},
    country: {type: String, default: ""}
  },
  status: {
    type: String,
    enum: ["pending", "active", "inactive"],
    default: "pending"
  },
  confirmationCode: {
    type: String,
    unique: true
  },
  userOrganizations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ],
  userInterests: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
  ],
  userDonations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'SingleDonation' }
  ],
  userAmountDonated: {type: Number, default: 0},
  orgUrl: {type: String, default: ""},
  orgLicense: {type: String, default: ""},
  orgRegistrar: {type: String, default: ""},
  orgCampaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
  orgCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  orgDonations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'SingleDonation' }
  ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
