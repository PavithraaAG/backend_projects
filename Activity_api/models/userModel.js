const mongoose = require('mongoose');
require('dotenv').config();
const userSchema = new mongoose.Schema({
    username: String,
    Uname: String,
    DOB: String,
    Address:String},
    {timestamps: true}

);
const user_model = mongoose.model(`${process.env.DB_COLLECTION2}`, userSchema);
module.exports = user_model