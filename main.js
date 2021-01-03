const express=require('express');
const database=require("./Database/db")();
const userModel=require("./Database/schema");
const app=express();



//ROUTES
app.use("/",require("./Routes/mainRoutes"))





app.listen(process.env.PORT || 5000,()=>console.log("Up and Running.."))