const express 	   = require("express");
const router       = express.Router();
const User         = require('../model/user');



// --- authorization middleware

router.use((req, res, next) => {
  console.log("route for profile", req.session.currentUser)
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/");
  }
});


// --- pilot profile

router.get('/', (req, res, next) => {
  console.log("user in the session:", req.session.currentUser);
  res.render('pilotprofile', {user: req.session.currentUser});
});

router.post('/', (req, res, next) => {
  var newUserName = req.body.username;
  var newNicKName = req.body.name;
  var newdrone_name = req.body.drone_name;
  var newdrone_description = req.body.drone_description;
  res.redirect('/pilotprofile');
});



module.exports = router;

