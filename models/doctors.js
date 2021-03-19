const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    specialisation: {
        type: String,
        required: true,
    },
    hospital: {
        type: String,
        required: true
    }   
});


const Doctor = mongoose.model('Doctors',doctorSchema);

module.exports = Doctor;