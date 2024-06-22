const { signup } = require("../controllers/user");
const asyncWrap = require("../middlewares/asyncWrap");

const passport = require("passport");
const router = require("express").Router();

router.route("/signup").post(signup);

router.route("/login").post(
  passport.authenticate("local", {}),

  asyncWrap((req, res, next) => {
    res.send("logged in");
  })
);

module.exports = router;
