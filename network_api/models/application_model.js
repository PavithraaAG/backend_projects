const mongoose = require('mongoose');
require('dotenv').config();
const applicationSchema = new mongoose.Schema({
    applicationId: Number,
});
const application_model = mongoose.model(`${process.env.DB_COLLECTION2}`, applicationSchema);
module.exports = application_model