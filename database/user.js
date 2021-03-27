const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const passport =require("passport");

const userSchema = new mongoose.Schema({
   name: {
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
  }
, year: {
    type: Array,
    required: false
  }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports=User;