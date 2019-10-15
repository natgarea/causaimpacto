const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

let transporter = require("../configs/nodemailer.config");

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {
      if (err) {
        console.log(err);
        reject(new Error("Something went wrong"));
      } else {
        resolve(user);
      }
    });
  });
};

// SIGNUP
router.post("/signup", (req, res, next) => {
  const { type, username, email, password } = req.body;
  if (!username || !password || !email) {
    next(new Error("You must provide valid credentials"));
  }

  // Check if user exists in DB
  User.findOne({ username }, "username", (err, user) => {

    if (user !== null) {
      res.status(500).json({ errorMsg: "Username already exists" });
      return  
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token = "";
    for (let i = 0; i < 25; i++) {
      token += characters[Math.floor(Math.random() * characters.length)];
    }

    const newUser = new User({
      type,
      username,
      email,
      password: hashPass,
      status: "pending",
      confirmationCode: token
    });


    newUser
      .save()
      .then(user => {

        transporter.sendMail({
          from: "causa impacto",
          to: email,
          subject: "Verificación de cuenta",
          text: `Por favor, accede al siguiente enlace para verificar tu cuenta: ${process.env.API_URL}/api/auth/confirm/${token}`,
          html: `<a href="${process.env.API_URL}api/auth/confirm/${token}">Haz click para verificar tu cuenta</a>`
        });

        login(req, user)
          .then(x => {
            res.json({ status: "signup & login successfully", user });
          })
          .catch(error => {
            res.status(500).json({
              status: "login failed",
              error
            });
          });
      })
      .catch(e => next(e));
  });
});

router.get("/confirm/:confirmCode", (req, res, next) => {
  const confirmCode = req.params.confirmCode;
  User.findOneAndUpdate({ confirmationCode: confirmCode }, {status: "active"}, {new: true})
    .then(user => {
      res.status(200).redirect('http://localhost:3000/home')
    }
    )
    .catch(err => console.log(err));
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    // Check for errors
    if (err) next(new Error("Something went wrong"));
    if (!theUser) next(failureDetails);

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));
  })(req, res, next);
});

router.get("/currentuser", (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    next(new Error("Not logged in"));
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out" });
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;
