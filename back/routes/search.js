const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");
const User = require("../models/User");

router.get("/:searchTerm?", (req, res, next) => {
  const searchTerm = req.params.searchTerm;
  let searchResults = [];

  if (req.params.searchTerm.length === 0) {
    res.status(200).json([])

    return;
  }
  // First, let's search for campaigns
  Campaign.find({ title: { $regex: searchTerm, $options: "i" } })
    .then(results => {
      results.map(result => {
        searchResults.push({
          title: result.title,
          uri: `/campaign/${result._id}`
        });
      });
    }).then(() => {
      // Second, let's find for organisations
      User.find({ orgName: { $regex: searchTerm, $options: "i" } })
        .then(results => {
          results.map(result => {
            searchResults.push({
              title: result.orgName,
              uri: `/profile/${result._id}`
            })
          })
        }).then(() => {
          res.status(200).json(searchResults);
        })
    });
});

module.exports = router;
