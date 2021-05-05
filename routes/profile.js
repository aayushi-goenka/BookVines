const express = require("express");
const router = express.Router()
const passport = require('passport');
const User = require("../database/user");
const app = express();

router.get("/", function(req, res){
    if (req.isAuthenticated()) 
    {
    User.findById({_id:req.user._id},(err,user)=>{
       if(err)
       {
         console.log(err)
         res.redirect("/fail");
       }
       else{
        //  console.log(user);
         res.render("profile",{user:user});
       }
    })
    }
    else 
    res.redirect("/login");
  });
module.exports = router;