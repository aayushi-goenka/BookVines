const express = require("express");
const router = express.Router()
const database= require("../database/db")();
const User= require("../database/user");
const Review = require("../database/review");
const passport =require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const app = express();


router.get("/",function(req,res){
    if (req.isAuthenticated()){
      Review.find({}, function (err, reviews) {
        if (err) {
          console.log(err);
        } else {
          res.render("reviews", {
            reviews: reviews,
          });
        }
      }); 
    }
    else
    res.redirect("/login");
  });


module.exports = router;