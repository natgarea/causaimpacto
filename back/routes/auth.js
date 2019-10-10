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
    console.log(user);
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
  console.log(req.body);
  const { type, username, email, password } = req.body;
  console.log("username req del body: " + username);
  console.log("email req del body: " + email);
  if (!username || !password || !email) {
    next(new Error("You must provide valid credentials"));
  }

  // Check if user exists in DB
  User.findOne({ username }, "username", (err, user) => {
    console.log("hago el findOne");
    console.log(user);
    if (user !== null) {
      res.status(500).json({ errorMsg: "Username already exists" });
      return
    }
    console.log("paso el if !user");
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
    console.log(newUser);

    newUser
      .save()
      .then(user => {
        console.log(user);
        console.log("creo usuario y mando mail");
        console.log(email + " o " + user.email);
        transporter.sendMail({
          from: "causa impacto",
          to: email,
          subject: "Verificación de cuenta",
          text: `Por favor, accede al siguiente enlace para verificar tu cuenta: http://localhost:3000/auth/confirm/${token}`,
          html: `<a href="http://localhost:3000/auth/confirm/${token}">Haz click para verificar tu cuenta</a>`
        });

        console.log("about to login");
        // console.log(req)
        // console.log(savedUser)
        login(req, user)
          .then(x => {
            console.log("ok");
            res.json({ status: "signup & login successfully", user });
          })
          .catch(error => {
            console.log("no ok");
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
  User.findOne({ confirmationCode: confirmCode })
    .then(
      User.update(
        { confirmationCode: confirmCode },
        {
          $set: {
            status: "active"
          }
        }
      ).then({ status: "successful account verification", user })
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
