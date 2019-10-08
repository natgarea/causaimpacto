const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  type: {
    type: String,
    enum: ["donor", "organization"],
    default: "donor"
  },
  username: String,
  password: String,
  email: String,
  userFirstname: String,
  userSurname: String,
  userImage: String,
  orgName: String,
  orgLogo: String,
  orgDescription: String,
  orgContactPerson: String,
  orgTelephone: String,
  orgEmail: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    stateOrProvince: String,
    postalCode: String,
    country: String
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
  userAmountDonated: Number,
  orgUrl: String,
  orgLicense: String,
  orgRegistrar: String,
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
