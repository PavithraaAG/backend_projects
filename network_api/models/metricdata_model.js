const mongoose = require('mongoose');
require('dotenv').config();
const metricdataSchema = new mongoose.Schema({
    metricdata: Object
});
const metricdata_model = mongoose.model(`${process.env.DB_COLLECTION3}`, metricdataSchema);
module.exports = metricdata_model