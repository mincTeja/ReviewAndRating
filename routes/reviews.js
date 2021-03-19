const express = require('express');
const router = express.Router();
const Review = require('../models/reviews');


router.get('/',async (req,res)=>{
    let reviews = await Review.find();
    res.send(reviews);

});

router.post('/',async (req,res)=>{
    const userId = req.body.userId;
    const doctorId = req.body.doctorId;
    const rating = req.body.rating;
    const review_data = req.body.review;
    let review = new Review(
        {
            userId,
            doctorId,
            rating,
            review: review_data
        }
    );

    await review.save();
    res.send(review);
});

router.put('/:id',async (req,res) => {
    const reviewData = await Review.findById(req.params.id);
    if(!reviewData) return res.status(400).send('Review not found');
    reviewData.rating = req.body.rating;
    reviewData.review = req.body.review;

    await reviewData.save();
    res.send(reviewData);
});

router.delete('/:id',async (req,res) => {
    await Review.deleteOne({ _id: req.params.id});
    res.send("Review Removed");
});


module.exports = router;