const express 	   = require("express");
const router       = express.Router();



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

router.get('/',(req, res, next) => {
  console.log("GET profile")
  res.render('pilotprofile');
});

module.exports = router;

