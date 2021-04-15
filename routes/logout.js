const express = require("express");
const router = express.Router()
const User= require("../database/user");
const passport =require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const app = express();


router.get("/", function(req,res){
    if(req.isAuthenticated)
 {
     req.logout();
  res.redirect("/login");
 } 
 else
 res.redirect("/fail")
});

module.exports = router;