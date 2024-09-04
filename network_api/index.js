const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/app');  // Import your routes module

const app = express();

// Connect to MongoDB
mongoose.connect(`${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('open', () => {
  console.log('Mongoose connection established');
});

// Exempted route definition (make sure to use the right router)
routes.get("/open-new/api/coc/report/saas-overview/details", (req, res) => {
  res.send("hi");
});

// Apply other routes
app.use("/", routes);

// Global middleware
app.use((req, res, next) => {
  consoel.log(req.originalUrl)
  if (req.originalUrl.startsWith('/open-new/api/coc/report/saas-overview/details')) {
    console.log("====================public route =============================");
    return next(); // Skip this middleware for the exempted route
  }

  req.user = {};
  if (req.headers["x-user"]) {
    try {
      req.user = JSON.parse(req.headers["x-user"]);
      if (req.user.type === "service") {
        req.query.datacenter = "service";
      } else {
        req.query.datacenter = req.query.datacenter || "IN-MUM-WEST-1";
      }
    } catch (error) {
      return res.status(400).json({ message: 'Invalid x-user header format' });
    }
  } else {
    req.query.datacenter = req.query.datacenter || "IN-MUM-WEST-1";
  }

  next();
});

// Start the server
app.listen(3003, () => {
  console.log('Server listening on port 3003');
});
