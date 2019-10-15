const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const singleDonationSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  org: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  anonymousDonation: Boolean,
  amountDonated: Number,
  comment: String,
  contactConsent: Boolean
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const SingleDonation = mongoose.model('SingleDonation', singleDonationSchema);
module.exports = SingleDonation;