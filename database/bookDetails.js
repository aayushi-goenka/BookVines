const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    bookName:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    imageURL:{
        type: URL
    },
    contactDetails:{
        type: String
    }
})
  
const bookDetail=mongoose.model("bookDetail",bookSchema)
module.exports=bookDetail;
