const express = require("express");
const router = express.Router()
const passport =require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const User= require("../database/user");
const app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


router.get("/", function(req,res){
  res.render("signup");
});
router.post("/", function(req,res){
  Users = new User({fname:req.body.fname,lname:req.body.lname,year:req.body.year,username:req.body.username});
  console.log(Users);
  User.register(Users, req.body.password, function (err,user) {
    if (err) {
      console.log(err);
      res.redirect("/signup/");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    }
  });
});

module.exports = router;