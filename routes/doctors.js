const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctors');
const Review = require('../models/reviews');

router.get('/',async (req,res)=>{
    const doctors = await Doctor.find();
    res.send(doctors);
});

router.get('/:id', async (req,res) => {
    const reviews = await Review.find({doctorId: req.params.id});
    res.send(reviews); 
});

router.get('/:id/rating', async (req,res) => {
    const reviews = await Review.find({doctorId: req.params.id});
    let overAllRating=0;
    reviews.forEach( reviewData => {
        overAllRating+=reviewData.rating;
    });
    overAllRating/=reviews.length;
    res.send({"overallRating":overAllRating});
});

module.exports = router;