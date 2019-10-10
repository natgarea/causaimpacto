const passport = require('passport');
const User = require('../models/User');

passport.serializeUser((loggedInUser, cb) => {
  console.log("loggedInUser")
  console.log(loggedInUser)
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession)
  .then(userDocument => {
    cb(null, userDocument);
  })
  .catch(err => {
    cb(err);
  })
});
