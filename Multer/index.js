const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3003;

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json({ limit: '50mb', extended: true }));
        // app.use(bodyParser.raw({ limit: '50mb', type: '*/*' }));
        app.use(bodyParser.json({ limit: '10mb' , extended: true}));
        app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
        app.use(express.static(path.join(__dirname, '../', 'public')));
        app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));

// Middleware for handling CORS
// app.use(cors({ origin: '*' }));

// app.use(bodyParser.json({ limit: '50mb', extended: true }));
//         app.use(bodyParser.raw({ limit: '50mb', type: '*/*' }));
        app.use(express.static(path.join(__dirname, '../', 'public')));
        // app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Custom logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.status(200).json({ message: 'File uploaded successfully', fileName: req.file.filename });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
