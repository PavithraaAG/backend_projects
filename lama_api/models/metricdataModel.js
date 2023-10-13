const mongoose = require('mongoose');
require('dotenv').config();

const db2 = mongoose.createConnection(`${process.env.DB_NAME2}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const metricdataSchema = new mongoose.Schema({
    metricdata: Object
});
const metricdata_model = db2.model(`${process.env.DB_COLLECTION2}`, metricdataSchema);
module.exports = metricdata_model