const mongoose = require('mongoose');
require('dotenv').config();
const exchangeSchema = new mongoose.Schema({
    "_id": String,
    "user_id": String,
    "member_id": String,
    "ip": String,
    "exchangeId": Number,
    "timestamp": String,
    "groupId": String,
    "sequenceId": Number,
});
const exchange_model = mongoose.model(`${process.env.DB_COLLECTION1}`, exchangeSchema);
module.exports = exchange_model