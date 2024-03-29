const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const storage = cloudinaryStorage ({
  cloudinary,
  folder: 'causaImpacto',
  allowedFormats: ['jpg', 'png', 'svg'],
  function(req, file, cd){
    cb(null, file.originalname);
  },
})

const upload = multer({ storage })

module.exports = upload