const express        = require("express");
const path           = require("path");
const favicon        = require('serve-favicon');
const logger         = require("morgan");

const cookieParser   = require("cookie-parser");
const bodyParser     = require("body-parser");
const mongoose       = require("mongoose");
const bcrypt     	   = require("bcrypt");
const session        = require("express-session");
const MongoSession   = require("connect-mongo")(session);
const app            = express();

const authRoutes     = require('./routes/auth');
const indexRoutes    = require('./routes/index');
const profileRoutes  = require('./routes/profile');
const raceRoutes     = require('./routes/race');

// Controllers

// Mongoose configuration
mongoose.connect("mongodb://localhost/meteor-races");

// Middlewares configuration
app.use(logger("dev"));

// Access POST params with body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// View engine configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//session
app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 60000 },
  store: new MongoSession({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/pilotprofile', profileRoutes);
app.use('/race', raceRoutes);

// Authentication
app.use(cookieParser());

// Routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
