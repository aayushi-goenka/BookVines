const express = require("express");
const router = express.Router()
const User= require("../database/user");
const passport =require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const app = express();



router.get("/", function(req, res){
    // if (!req.isAuthenticated())
     res.render("login");
    //  else
    //  res.redirect("/");
  });
  
  router.post("/", function (req, res) {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    req.login(user, function (err) {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/");
        });
      }
    });
  });



module.exports = router;
