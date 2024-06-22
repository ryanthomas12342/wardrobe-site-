const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    validate: [validator.isEmail, "Please provide a coreect email"],
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
