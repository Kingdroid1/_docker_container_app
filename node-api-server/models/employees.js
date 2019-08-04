const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: String, required: true },
    designation: { type: String, required: true },
    location: { type: String, required: true },
}, { timestamps: true,
    collection: 'employees'});

const Emp = mongoose.model('Employee', empSchema); 
module.exports = Emp;   