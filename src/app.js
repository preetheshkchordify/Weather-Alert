require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/route');
const { startScheduler } = require('./utils/scheduler');
const constants = require('./config/constants');

const app = express();
app.use(express.json());
app.use('/api', routes);

connectDB().then(() => {
  startScheduler();
  app.listen(constants.PORT, () => {
    console.log(`Server running on port ${constants.PORT}`);
  });
});
