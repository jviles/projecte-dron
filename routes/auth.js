const express = require("express");
const userModel = require('../model/user');
const bcrypt = require("bcrypt");
const router = express.Router();
const bcryptSalt = 10;


// --- authorization middleware

router.use((req, res, next) => {
  console.log("route for auth", req.session.currentUser)
  if (req.session.currentUser) {
    res.redirect("/pilotprofile");
  }
  else {
    next();
  }
})

// --- signup

router.get('/signup',(req, res, next) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {

  var username = req.body.username;
  var password = req.body.password;

  if (username === "" || password === "") {
      res.render("signup", {
          errorMessage: "Indicate a username and a password to sign up"
      });
      return;
  }

  userModel.findOne({ "username": username }, "username", (err, user) => {
    if (user !== null) {
      res.render("signup", {
          errorMessage: "The username already exists"
      });
      return;
    }

    var salt = bcrypt.genSaltSync(bcryptSalt);
    var hashPass = bcrypt.hashSync(password, salt);

    var newUser = new userModel({
      username,
      password: hashPass
    });

    newUser.save((err) => {
      if (err) {
        res.render("signup", {
          errorMessage: "Something went wrong when signing up"
        });
      } else {
        req.session.currentUser = newUser;
        res.redirect('pilotprofile');
      }
    });

  });

});


// --- login

router.get('/login',(req, res, next) => {
  res.render('login');
});

router.post("/login", (req, res, next) => {

  var username = req.body.username;
  var password = req.body.password;

  if (username === "" || password === "") {
    res.render("login", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }
  userModel.findOne({ "username": username }, "username password", (err, user) => {
    if (err || !user) {
      res.render("login", {
        errorMessage: "User or password incorrect"
      });
      return;
    }
    if (bcrypt.compareSync(password, user.password)) {
      // Save the signin in the session!
      req.session.currentUser = user;
      res.render("pilotprofile", {user});
    } else {
      res.render("login", {
        errorMessage: "User or password incorrect"
      });
    }
  });

});


module.exports = router;
