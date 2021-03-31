const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const passport =require("passport");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: false
  },
   lname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  year: {
    type: String,
    required: false
  }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports=User;