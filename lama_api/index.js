const axios = require('axios');
const express = require('express');
const app = express();
const mongoose= require('mongoose');
const routes = require('./routes/app');

app.use("/",routes)

app.listen(3003,(req,res) => {
    console.log('listenng on')
})