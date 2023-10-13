const express = require('express');
const app = express();
const mongoose= require('mongoose');
const routes=require('./routes/app')

mongoose.connect(`${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('open', function () {
    console.log('mongoose connection')
})


app.use("/", routes)

app.listen(3003,(req,res) => {
    console.log('listenng on')
})