const express = require("express");
const router = express.Router()
const passport =require("passport");
const passportLocalMongoose = require("passport-local-mongoose"); 
const app = express();

router.get("/", function(req, res){
    if (req.isAuthenticated()){
       
    //ADD YOUR CODE HERE
    
    res.render("add");
    }
    else res.redirect("/login");
  });



module.exports = router;