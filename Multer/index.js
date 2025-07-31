const express = require('express');
const multer = require('multer');
const fs = require('fs-extra');
const path = require('path');
const app = express();

const upload = multer({
  storage: multer.memoryStorage(),
}); // We are using memory storage to handle small chunks in memory

app.post('/upload-chunk', upload.single('chunk'), async (req, res) => {
  const { chunkNumber, totalChunks, fileName } = req.body;
  const chunk = req.file;

  const uploadDir = path.join(__dirname, 'uploads');
  await fs.ensureDir(uploadDir); // Ensure upload directory exists

  const filePath = path.join(uploadDir, `${fileName}.part`);
  await fs.appendFile(filePath, chunk.buffer); // Append the chunk to the file

  console.log(`Received chunk ${chunkNumber} of ${totalChunks} for file ${fileName}`);

  // If all chunks are uploaded, rename the file
  if (parseInt(chunkNumber) + 1 === parseInt(totalChunks)) {
    const finalFilePath = path.join(uploadDir, fileName);
    await fs.rename(filePath, finalFilePath); // Rename the file to remove ".part"
    console.log(`Upload complete for file ${fileName}`);
  }

  res.status(200).json({ message: `Chunk ${chunkNumber} received` });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});



