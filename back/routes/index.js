const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
router.use("/auth", authRoutes);

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
