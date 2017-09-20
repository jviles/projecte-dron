const express 	   = require("express");
const router       = express.Router();
const Race         = require('../model/race');



// --- authorization middleware

router.use((req, res, next) => {
  console.log("route for profile", req.session.currentUser)
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/");
  }
});


// --- race profile

router.get('/', (req, res, next) => {
    Race.find({}, (err, docs) => {
      if(err) {
        next();
      }
      else {
        res.render('races', {Race:docs});
      }
    });
  });

  module.exports = router;