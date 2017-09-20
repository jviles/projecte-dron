const express = require("express");
const router = express.Router();


// --- homepage

router.get('/',(req, res, next) => {
  if (req.session.currentUser) {
    res.redirect("/pilotprofile");
  } else {
    res.render('index');
  }``
});

module.exports = router;
