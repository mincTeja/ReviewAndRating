const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    doctorId: {
        type: String

    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});



const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;