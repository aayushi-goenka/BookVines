const express = require("express");
const router = express.Router()
const passport = require('passport');
const bookDetail=require("../database/bookDetails");
const Review = require("../database/review");
const app = express();


router.get("/:id", function(req, res){
    if (req.isAuthenticated())
    {
        bookDetail.findOne({_id: req.params.id},(err,data)=>{
            if(err)
            {
                res.render('fail');
            }else if(data)
            {
                 
                res.render("product",{data: data}); 
            }
        })
        } 
    else res.redirect("/login");
});

router.post("/:id", async (req,res)=>{
  try {
     const id=req.params.id;
   
if(req.isAuthenticated()){
 const data= await bookDetail.findOne({_id: req.params.id} );
 if(!data)
 res.render('fail');
 else
 {
   
  const newReview = {
    reviewBy: req.body.reviewBy,
    reviewContent: req.body.reviewContent
  }
  data.reviews.push(newReview);
  await data.save();
  // console.log(data);
  res.redirect("/product/"+id);
 }


  } }catch (error) {
    console.log(error);
    res.render('fail');
  }
  
});


module.exports = router;