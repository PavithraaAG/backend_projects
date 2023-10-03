const mongoose = require('mongoose');
require('dotenv').config();
const userSchema=new mongoose.Schema({
    user:{
        userId:Number,
        username:String
    }
});
const user_model=mongoose.model(`${process.env.DB_COLLECTION1}`,userSchema);
module.exports = user_model