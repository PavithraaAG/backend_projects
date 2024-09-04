const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes= require('./routes/app')
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

mongoose.connect(`${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('open', function () {
    console.log('mongoose connection')
})

app.use("/", routes)
app.use(express.static(path.join(__dirname, '../', 'public')));

app.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './uploads';
    form.keepExtensions = true;
  
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
  
      const oldPath = files.file.path;
      const newPath = path.join(form.uploadDir, files.file.name);
  
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
  
        res.send('File uploaded and moved!');
      });
    });
  })

app.listen(3000, function (req, res) {
    console.log("listening on");
})
