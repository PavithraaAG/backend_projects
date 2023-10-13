const mongoose = require('mongoose');
require('dotenv').config();
const db1 = mongoose.createConnection(`${process.env.DB_NAME1}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const errorSchema = new mongoose.Schema({
    error: String,
    data: Array
});
const error_model = db1.model(`${process.env.DB_COLLECTION1}`, errorSchema);
module.exports = error_model