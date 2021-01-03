const mongoose=require('mongoose');

const connection=async ()=>{
    try{
        const conn=await mongoose.connect("mongodb://localhost:27017/myapp",{useNewUrlParser: true, useUnifiedTopology: true}) 
    }catch(error){
       console.log(error)
    } 
}
module.exports=connection;