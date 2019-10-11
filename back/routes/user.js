const express = require("express");
const router = express.Router();
const upload = require("../configs/cloudinary.config");
const User = require("../models/User");

router.put("/updateDonor", (req, res, next) => {
  const { username, userFirstname, userSurname, address } = req.body;
  console.log("antes de llamar a la BD: " + username)

  User.findOneAndUpdate(
    { username: username },
    {
      userFirstname: userFirstname,
      userSurname: userSurname,
      address: address
    },
    { new: true }
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

router.put("/updateOrganization", (req, res, next) => {
    const { username, orgName, orgDescription, orgContactPerson, orgTelephone, orgEmail, address, orgUrl, orgLicense, orgRegistrar } = req.body;
  
    User.findOneAndUpdate(
      { username: username },
      {
        orgName: orgName,
        orgDescription: orgDescription,
        orgContactPerson: orgContactPerson,
        orgTelephone: orgTelephone,
        orgEmail: orgEmail,
        orgUrl: orgUrl,
        orgLicense: orgLicense,
        orgRegistrar: orgRegistrar,
        address: address
      },
      { new: true }
    )
      .then((data) => {
        res.status(200).json({data});
      })
      .catch(err => console.log(err));
  });

module.exports = router;
