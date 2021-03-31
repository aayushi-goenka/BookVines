const mongoose=require('mongoose');
const Review = require('./review');

const bookSchema=new mongoose.Schema({
    title:{
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
        type: String
    },
    genre:{
        type: String
    },
    userId:{
        type: String
    },
    email:{
        type: String
    },
    reviews:
        [
            {
                reviewBy:{
            type:String
        }, 
        reviewContent:
        {type:String}
    }]
    
})

const bookDetail=mongoose.model("bookDetail",bookSchema)
module.exports=bookDetail;
