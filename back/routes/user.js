const express = require("express");
const router = express.Router();
const upload = require("../configs/cloudinary.config");
const User = require("../models/User");

// Get user type "organization"
router.get("/", (req, res, next) => {
  User.find({ type: "organization" })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

// Get user donations to organizations
router.get("/o/donations", (req, res, next) => {
  const id = req.user._id;
  User.findById(id)
  .populate({path: "userDonations", populate: { path: "org"}})
  .then(data => {
    res.status(200).json(data.userDonations.filter(uD => uD.org));
  })
  .catch(err => console.log(err));
});

// Get user donations to campaigns
router.get("/c/donations", (req, res, next) => {
  const id = req.user._id;
  User.findById(id)
  .populate({path: "userDonations", populate: { path: "campaign"}})
  .then(data => {
    res.status(200).json(data.userDonations.filter(uD => uD.campaign));
  })
  .catch(err => console.log(err));
});

// Get organization by category
router.get("/category/:categoryId", (req, res, next) => {
  const id = req.params.categoryId;
  User.find({orgCategories: id})
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err));
})

// Update user by id
router.put("/update/:id", (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  User.findByIdAndUpdate(id, data, { new: true })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

// Upload file to Cloudinary, receive response with URL
router.post("/upload", upload.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.secure_url });
});

// Get user by id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
