const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require('./routes/users');
const reviews = require('./routes/reviews');
const auth = require('./routes/auth');
const doctors = require('./routes/doctors');
const config = require('config');

if(!config.get('jwtPrivateKey')){
    console.log('key is missing');
    process.exit(1);
}

mongoose.connect('mongodb+srv://teja123:workattech@reviewandrating.g4lpd.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(console.log("connected to db"))
    .catch(console.log("not connected to db"));
app.use(express.json());

app.use('/users',users);
app.use('/reviews',reviews);
app.use('/auth',auth);
app.use('/doctors',doctors);
app.get('/',(req,res) => {
    res.status(200).send("Hello World");
});
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening at ${port}`));