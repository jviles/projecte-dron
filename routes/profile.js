const express 	   = require("express");
const router       = express.Router();
const User         = ("../model/user");



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
  User.find({},(err))
  res.render('user',{
   user:user 
  });
});*/

router.get('/', (req, res, next) => {
  User.find({}, (err, docs) => {
    if(err) {
      next();
    }
    else {
      res.render('pilotprofile', {user:docs});
    }
  });
});

module.exports = router;

