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

/*router.get('/',(req, res, next) => {
  console.log("GET profile")
  res.render('pilotprofile');
});*/

router.get('/', (req, res, next) => {
  User.findById({}, (err, docs) => {
    if(err) {
      next();
    }
    else {
      res.render('pilotprofile', {User:docs});
    }
  });
});

router.post('/', (req, res, next) => {
  var newUserName = req.body.Name;
  var newNicKName = req.body.propellers;
  var newDrone = req.body.newDrone;

  _addToDBS(newUserName, newNickName, new)Drone;
  res.redirect('/pilotprofile');
});



module.exports = router;

