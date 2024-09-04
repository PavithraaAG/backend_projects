const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const routes = require('./routes/app');
require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(`${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('open', function () {
    console.log('mongoose connection')
})
 
app.use("/",routes)

const PORT = process.env.port || 8080;
app.listen(3003,(req,res) => {
    console.log(`listening on ${PORT}`)
})