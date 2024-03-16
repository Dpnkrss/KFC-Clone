const mongoose = require('mongoose');

exports.connectDatabase = async () => {
  try {
    await mongoose
      .connect('mongodb://localhost:27017/kfc')
      .then((con) => console.log('Database is connected'));
  } catch (error) {
    console.log(error);
  }
};
