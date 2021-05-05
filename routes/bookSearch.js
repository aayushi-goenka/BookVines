const express = require("express");
const router = express.Router()
const passport =require("passport");
const bookDetail=require("../database/bookDetails")
const passportLocalMongoose = require("passport-local-mongoose"); 


router.post("/",async (req,res)=>{
    bookDetail.find({},(err,data)=>{
        if(err)
        {
            console.log(err)
        }else
        {
            const value=req.body.genre;
            const UpdatedList=data.filter((a)=> a.genre===value)
            res.render('BookList',{posts: UpdatedList,filter: true,filterValue: req.body.genre})
        }
    })

})


module.exports=router;







