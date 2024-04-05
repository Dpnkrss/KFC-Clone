const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const products = require('./routes/products');

const { connectDatabase } = require('./config/config');
const cors = require('cors');

connectDatabase();
app.use(cors());
app.use(bodyParser());
app.use('/api/v1/', products);

app.listen(process.env.PORT, () => {
  console.log(`Server port ${process.env.PORT}`);
});

app.use((err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Wrong Mongoose Object ID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new Error(message);
  }

  // Handling Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new Error(message);
  }

  // Handling Mongoose duplicate key errors
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    error = new Error(message);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Internal Server Error',
  });
});
