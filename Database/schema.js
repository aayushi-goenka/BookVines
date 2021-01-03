const mongoose=require('mongoose')


const mySchema=mongoose.Schema({
    data:{
        type: String
    }
})


module.exports=mongoose.model("Schema",mySchema);