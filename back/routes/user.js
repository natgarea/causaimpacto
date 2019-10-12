const express = require("express");
const router = express.Router();
const upload = require("../configs/cloudinary.config");
const User = require("../models/User");

router.put("/update/:id", (req, res, next) => {
  const id = req.params.id;
  const data = req.body;

  User.findByIdAndUpdate(id, data, { new: true })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
