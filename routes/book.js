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
         res.redirect("/fail");
       }else{
          res.render('BookList',{posts: data,filter: false})
       }
     })
  }else res.redirect("/login")
})

router.get("/addBook",(req,res)=>{
    if(req.isAuthenticated())
    {
    
       res.render('addBook')
    }else{
      res.redirect("/login")
    }
})


router.post("/addBook", function(req, res){
    if (req.isAuthenticated()){
       
       const Details=new bookDetail({
           title: req.body.title,
           author: req.body.author,
           description: req.body.description,
           imageURL: req.body.imageURL,
           genre: req.body.genre,
           userId: req.user._id,
           email: req.body.email
       })
       Details.save((err,result)=>{
         if(err){
           console.log(err)
           res.redirect("/fail");
         }else{
           res.redirect("/product/"+result._id);
         }
       })
    }
    else res.redirect("/login");
  });



module.exports = router;