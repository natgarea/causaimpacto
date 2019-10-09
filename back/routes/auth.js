const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
// const Organization = require("../models/Organization");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

let transporter = require("../configs/nodemailer.config");

const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)

      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}


// SIGNUP
router.post('/signup', (req, res, next) => {

  const {type, username, email, password} = req.body;

  if (!username || !password || !email){
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token = "";
    for (let i = 0; i < 25; i++) {
      token += characters[Math.floor(Math.random() * characters.length)];
    }

    return new User({
      type,
      username,
      email,
      password: hashPass,
      status: "pending",
      confirmationCode: token
    }).save();
  })
  .then( () => { 
    transporter.sendMail({
      from: "causa impacto",
      to: email,
      subject: "Verificación de cuenta",
      text: `Por favor, accede al siguiente enlace para verificar tu cuenta: http://localhost:3000/auth/confirm/${token}`,
      html: `Por favor, accede al siguiente enlace para verificar tu cuenta: <h3><a href="http://localhost:3000/auth/confirm/${token}">Verifica tu cuenta</a></h3>`
    })})
  .then( savedUser => login(req, savedUser)) // Login the user using passport
  .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  .catch(e => next(e));
});

router.get("/confirm/:confirmCode", (req, res, next) => {
  const confirmCode = req.params.confirmCode;
  User.findOne({ confirmationCode: confirmCode })
  .then(
    User.update({ confirmationCode: confirmCode }, {
      $set: {
        status: "active"
        }
    })
    .then({status: 'successful account verification', user})
  ).catch( (err) => console.log(err));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});


router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
});


router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;
