const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
var fs = require('fs')
var path = require('path')
var morgan = require('morgan')


const resultRoutes = require('./routes/results');


const app = express();

dotenv.config({ path: "./.env" });
const port = 3001 || 5000;


var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.use(express.json());
app.use(cors());

app.use("/assets", express.static("uploads"));


app.use(express.static('images'))


app.use('/api/results', resultRoutes);


app.get('/', (req,res) => {
    res.send('Default route, Express.js');
})


mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => console.log(`Database Connection Successful !`))
  .catch((err) => console.log("Error connecting to MONGODB ",err))

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
