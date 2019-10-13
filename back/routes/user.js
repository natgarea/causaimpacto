const express = require("express");
const router = express.Router();
const upload = require("../configs/cloudinary.config");
const User = require("../models/User");


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

// router.post('/upload', upload.single("imageUrl"), (req, res, next) => {
//    // console.log('file is: ', req.file)

//    if (!req.file) {
//     next(new Error('No file uploaded!'));
//     return;
//   }
//   // get secure_url from the file object and save it in the 
//   // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
//   res.json({ secure_url: req.file.secure_url });
// })


module.exports = router;
