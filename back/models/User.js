const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  surname: String,
  image: String,
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
    enum: ["Pending", "Active", "Inactive"],
    default: "Pending"
  },
  confirmationCode: {
    type: String,
    unique: true
  },
  organizations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }
  ],
  interests: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
  ],
  singleDonations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'SingleDonation' }
  ],
  totalDonated: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
