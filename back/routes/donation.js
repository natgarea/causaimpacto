const express = require("express");
const router = express.Router();
const SingleDonation = require("../models/SingleDonation");
const User = require("../models/User");
const Campaign = require("../models/Campaign");

router.get("/", (req, res, next) => {
  const id = req.user._id;
  SingleDonation.find({ org: id }).populate("user")
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err));
});

router.get("/o/:idOrg", (req, res, next) => {
  const id = req.params.idOrg;
  SingleDonation.find({ org: id }).populate("user")
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err));
});

router.get("/c/:idCampaign", (req, res, next) => {
  const id = req.params.idCampaign;
  SingleDonation.find({ campaign: id }).populate("user")
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err));
});



router.post("/o/:donorId/:orgId", (req, res, next) => {
  const donorId = req.params.donorId;
  const orgId = req.params.orgId;
  const { anonymous, donation, contact } = req.body;
  User.findById(donorId).then(donor => {
    const newDonation = new SingleDonation({
      user: donorId,
      anonymousDonation: anonymous,
      amountDonated: donation,
      contactConsent: contact,
      org: orgId
    });
    newDonation
      .save()
      .then(() => {
        User.findByIdAndUpdate(
          donorId,
          {
            $push: { userDonations: newDonation._id },
            $set: {
              userAmountDonated:
                newDonation.amountDonated + donor.userAmountDonated
            }
          },
          { new: true }
        ).then(() => {
          User.findByIdAndUpdate(
            orgId,
            {
              $push: { orgDonations: newDonation._id }
            },
            { new: true }
          ).then(() => {});
        });
      })
      .then(res.status(200).json(newDonation));
  });
});

router.post("/c/:donorId/:campaignId", (req, res, next) => {
  const donorId = req.params.donorId;
  const campaignId = req.params.campaignId;
  const { anonymous, donation, contact } = req.body;
  User.findById(donorId).then(donor => {
    const newDonation = new SingleDonation({
      user: donorId,
      anonymousDonation: anonymous,
      amountDonated: donation,
      contactConsent: contact,
      campaign: campaignId
    });
    newDonation
      .save()
      .then(() => {
        User.findByIdAndUpdate(
          donorId,
          {
            $push: { userDonations: newDonation._id },
            $set: {
              userAmountDonated:
                newDonation.amountDonated + donor.userAmountDonated
            }
          },
          { new: true }
        ).then(() => {
          Campaign.findByIdAndUpdate(
            campaignId,
            {
              $push: { singleDonations: newDonation._id }
            },
            { new: true }
          ).then(() => {});
        });
      })
      .then(res.status(200).json(newDonation));
  });
});

router.put("/comment/:donationId", (req, res, next) => {
  const donationId = req.params.donationId;
  const comment = req.body.comment;
  SingleDonation.findByIdAndUpdate(
    donationId,
    { $set: { comment: comment } },
    { new: true }
  )
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
