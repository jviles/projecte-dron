const express 	   = require("express");
const bcrypt 	   = require("bcrypt");
const userModel    = require('../model/user');
const router       = express.Router();

router.get('/login',(req, res, next) => {
  if (req.session.currentUser) {
    res.redirect("pilotprofile");
    return;
  }

  res.render('login');
});

router.post("/login", (req, res, next) => {

  if (req.session.currentUser) {
    res.redirect("pilotprofile");
    return;
  }

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
      res.redirect("pilotprofile");
    } else {
      res.render("login", {
        errorMessage: "User or password incorrect"
      });
    }
  });

});

module.exports = router;
