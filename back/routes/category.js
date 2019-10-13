const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.get("/", (req, res, next) => {
  Category.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;