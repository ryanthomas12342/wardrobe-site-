const CustomError = require("../utils/CustomeError");
const asyncWrap = require("../middlewares/asyncWrap");
const User = require("../models/user");

module.exports.signup = asyncWrap(async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    return next(new CustomError("need to be provide all deltails", 404));
  }

  const newUser = new User({
    username,
    email,
  });
  let res1 = await User.register(newUser, password);
  console.log(res1);

  req.login(newUser, (err) => {
    if (err) {
      return next(new CustomError("was unable to login", 400));
    }
    res.send(newUser);
  });
});
