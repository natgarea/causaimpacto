const express = require("express");
const router = express.Router();
const upload = require("../configs/cloudinary.config");
const User = require("../models/User");

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id).then(data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err));
})

router.put("/update/:id", (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  console.log(data)
  User.findByIdAndUpdate(id, data, { new: true })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

router.post('/upload', upload.single("imageUrl"), (req, res, next) => {
   if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  res.json({ secure_url: req.file.secure_url });
})


module.exports = router;
