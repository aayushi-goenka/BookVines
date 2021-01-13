const express = require("express");
const router = express.Router()
const database= require("../database/db")();
const User= require("../database/user");
const Review = require("../database/review");
const passport =require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const app = express();



router.get("/", function (req, res) {
    if (req.isAuthenticated()) 
      res.render("creviews");
      else
      res.redirect("/login");
  });
  
  router.post("/", function (req, res) {
    const review = new Review({
      reviewBy: req.body.reviewBy,
      reviewContent: req.body.reviewContent
    });
    review.save(function (err) {
      if (!err) {
        res.redirect("/reviews");
      }
      else
      console.log(err);
    });
  });


  module.exports = router;