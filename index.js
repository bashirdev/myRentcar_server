require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser')
const cors=require('cors')
const router = require('./src/route/router');


const app = express();
app.use(bodyParser.json())
app.use(express.json());

app.use(cors())



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/api/v1', router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
