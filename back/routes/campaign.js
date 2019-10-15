const express = require("express");
const router = express.Router();
const upload = require("../configs/cloudinary.config");
const Campaign = require("../models/Campaign");

router.get("/o/:id", (req, res, next) => {
  const id = req.params.id;
  Campaign.find({ organization : id  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Campaign.findById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.log(err));
});

router.put("/update/:id", (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  Campaign.findByIdAndUpdate(id, data, { new: true })
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
});

// router.post("/", (req, res, next) => {
//     //falta que ponga que datos le paso, igual que en signup
//     return this.service.post("/", {}) //AQUI }).then(response => response.data);
//   });


module.exports = router;
