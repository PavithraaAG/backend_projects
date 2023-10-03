const mongoose = require('mongoose');
require('dotenv').config();
const userSchema = new mongoose.Schema({
    commentId: Number,
    body: String,
    postId: Number,
    user: Object
});
const comment_model = mongoose.model(`${process.env.DB_COLLECTION2}`, userSchema);
module.exports = comment_model