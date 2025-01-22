const mongoose = require('mongoose');
const constants = require('./constants');

const connectDB = async () => {
  try {
    await mongoose.connect(constants.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
