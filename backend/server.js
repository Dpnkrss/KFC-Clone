const express = require('express');
const app = express();
require('dotenv').config();
const products = require('./routes/products');

app.use('/api/v1/', products);

app.listen(process.env.PORT, () => {
  console.log(`Server port ${process.env.PORT}`);
});
