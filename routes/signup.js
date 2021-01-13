const express = require("express");
const router = express.Router()
const passport =require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const User= require("../database/user");
const app = express();


// router.get("/",function(req,res){
//     if (!req.isAuthenticated())
//       res.render("signup");
//     else
//     res.redirect("/");
//   });
  
//   router.post("/", function (req, res) {
  
//     User.register({ username: req.body.username }, req.body.password, function (err, user) {
//       if (err) {
//         console.log(err);
//         res.redirect("/signup");
//       } else {
//         passport.authenticate("local")(req, res, function () {
//           res.redirect("/genre");
//         });
//       }
//     });
  
//   });

router.get("/", function(req,res){
  res.render("signup");
});
router.post("/", function(req,res){

  User.register({ username: req.body.username }, req.body.password, function (err,user) {
    if (err) {
      console.log(err);
      res.redirect("/signup");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/");
      });
    }
  });
});







  module.exports = router;