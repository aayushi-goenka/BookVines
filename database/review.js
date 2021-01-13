const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
  reviewBy: String,
  reviewContent: String
});

const Review = mongoose.model("Review", reviewSchema);
module.exports=Review;