const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    logo: String,
    description: String,
    contactPerson: String,
    telephone: String,
    email: String,
    address: {
      line1: String,
      line2: String,
      city: String,
      stateOrProvince: String,
      postalCode: String,
      country: String
    },
    url: String,
    displayEmail: String,
    licenseNumber: String,
    registrar: String,
    campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;
