const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const campaignSchema = new Schema({
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  fundraisingTarget: Number,
  pictures: Array,
  totalDonations: Number,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },
  deadline: Date,
  suggestedDonation: Number,
  singleDonations: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'SingleDonation' }
  ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Campaign = mongoose.model('Campaign', campaignSchema);
module.exports = Campaign;
