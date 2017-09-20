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


// --- race profile

router.get('/',(req, res, next) => {
    console.log("GET profile")
    res.render('race');
  });

/*router.get('/', (req, res, next) => {
    Race.find({}, (err, docs) => {
      if(err) {
        next();
      }
      else {
        res.render('/race', {Race:docs});
      }
    });
  });*/
  
  
  /*
  router.get('/new', (req, res, next) => {
    res.render('drones/new');
  });
  
  router.post('/', (req, res, next) => {
    var newDroneName = req.body.droneName;
    var newPropellers = req.body.propellers;
    var newMaxSpeed = req.body.maxSpeed;
  
    _addToDBS(newDroneName, newPropellers, newMaxSpeed);
    res.redirect('/drones');
  });
  
  function _addToDBS(name, prop, speed){
    var newDrone = new Drone({droneName: name, propellers: prop, maxSpeed: speed});
    newDrone.save((err, doc) => {
      if(err){
        throw err;
      }
      else{
        console.log(`${doc} is saved!`);
      }
    });
  }*/
  
  module.exports = router;