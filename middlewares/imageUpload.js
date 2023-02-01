const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');

const storage = (folder)=>multer.diskStorage({
  destination: `./uploads/${folder}`,
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const uploadImage = (folder)=> multer({
  storage: storage(folder),
  limits: { fileSize: 1000000 },
});

module.exports = {
    uploadImage
};