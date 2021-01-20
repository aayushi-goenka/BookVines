const express = require("express");
const router = express.Router()
const passport =require("passport");
const bookDetail=require("../database/bookDetails")
const passportLocalMongoose = require("passport-local-mongoose"); 
const app = express();

router.get("/",(req,res)=>{
  if(req.isAuthenticated()){
     bookDetail.find({},(err,data)=>{
       if(err)
       {
         console.log(err)
       }else{
         res.render('book',{bookData: data})
       }
     })
  }else res.redirect("/login")
})

router.post("/addBook", function(req, res){
    if (req.isAuthenticated()){
       const Details=new bookDetail({
           bookName: req.body.bookName,
           author: req.body.author,
           description: req.body.description,
           imageURL: req.body.imageURL,
           contactDetails: req.body.contactDetails
       })
       Details.save((err,result)=>{
         if(err){
           console.log(err)
         }else{
           res.render("add");
         }
       })
    }
    else res.redirect("/login");
  });



module.exports = router;