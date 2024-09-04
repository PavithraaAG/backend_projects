const mongoose = require('mongoose');
require('dotenv').config();
const activitySchema = new mongoose.Schema({
    uid:String,
    title: String,
    action: String,
    username:String,
    data:Object},
    {timestamps: true}

);
const activity_model = mongoose.model(`${process.env.DB_COLLECTION1}`, activitySchema);
module.exports = activity_model