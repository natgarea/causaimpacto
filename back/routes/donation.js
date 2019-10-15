const express = require("express");
const router = express.Router();
const SingleDonation = require("../models/SingleDonation");
const User = require("../models/User");

router.post("/o/:donorId/:orgId", (req, res, next) => {
  const donorId = req.params.donorId;
  const orgId = req.params.orgId;
  const { anonymous, donation, contact } = req.body;
  User.findById(donorId).then(donor => {
    const newDonation = new SingleDonation({
        user: donor._id,
        anonymousDonation: anonymous,
        amountDonated: donation,
        contactConsent: contact
    })
    newDonation.save().then(() => {
        User.findByIdAndUpdate(donorId, {
            $push: { userDonations: newDonation._id  },
            $set: { userAmountDonated: newDonation.amountDonated + donor.userAmountDonated }
            }, {new: true}).then(() => {
                console.log(orgId)
                User.findByIdAndUpdate(orgId, {
                    $push: { orgDonations: newDonation._id  }
                }, {new: true}).then(() => {})
            })

    }).then(res.status(200).json(newDonation))
  })

});

module.exports = router;