const express = require("express");
const router = express.Router()
const passport =require("passport");
const bookDetail=require("../database/bookDetails")
const passportLocalMongoose = require("passport-local-mongoose"); 

router.get("/",(req,res)=>{
    bookDetail.find({},(err,data)=>{
      if(err)
      {
        res.redirect("/fail");
      }else{
         post=data.slice(0,8)
         res.render('faq',{posts: post,filter: false});
      }  
 })
})


module.exports=router;