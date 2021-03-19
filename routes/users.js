const express = require('express');
const router = express.Router();
const User = require('../models/users'); 
const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');


router.post('/',async (req,res)=>{
    let user = await User.findOne({email: req.body.email});
    if (user) return res.status(404).send('user already registered');

    user = new User({
        name : req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);

    await user.save();
    const token = user.generateAuthToken();

    res.header('x-auth-token',token).send(_.pick(user,['_id','name','email']));
});



module.exports = router;