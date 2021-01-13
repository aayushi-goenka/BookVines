const mongoose=require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const connection=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.DBURL,options) 
    }catch(error){
       console.log(error)
    } 
}
module.exports=connection;