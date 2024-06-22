const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

require("dotenv").config();

const User = require("./models/user"); // Make sure User model is correctly required
const product = require("./routes/product");
const user = require("./routes/user");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default secret", // Replace with your own secret
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json()); // Middleware to parse JSON bodies
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.send("this is the default page");
});

app.use("/api/v1", product);
app.use("/api/v1/auth", user);

module.exports = app;
