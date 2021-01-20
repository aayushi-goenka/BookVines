const express = require("express");
const router = express.Router()
const passport =require("passport");
const bookDetail=require("../database/bookDetails")
const passportLocalMongoose = require("passport-local-mongoose"); 


router.post("/",(req,res)=>{
 
    bookDetail.find({},(err,data)=>{
        if(err)
        {
            console.log(err)
        }else if(data.length>0)
        {
             const filteredOption=req.body.filter;
             const value=req.body.searchedValue;
            const UpdatedList=data.filter((a)=> a.filteredOption===value)
            res.render('book',{bookData: UpdatedList})
        }else{
             res.redirect("/book")
        }
    })

})


module.exports=router;







module.exports=router