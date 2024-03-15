const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const products = require('./routes/products');

app.use(bodyParser());
app.use('/api/v1/', products);

app.listen(process.env.PORT, () => {
  console.log(`Server port ${process.env.PORT}`);
});
