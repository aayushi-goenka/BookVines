const router=require('express').Router();
const {askMyName}=require("../Utils/impFunc")
router.get("/",(req,res)=>{
    res.send(askMyName());
})









module.exports=router;