/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// Initial setup
const express = require('express');
const app = express();
const path = require('path');

// Constants
const PUBLIC_DIR = path.join(__dirname, `../build/static`);
const BUILD_DIR = path.join(__dirname, `../build`);
const router = require('./routes/router');

// Stores custom environmental variables
require('dotenv').config({
  silent: true, path: path.join(__dirname, '.env'),
});
const morgan = require('morgan'); // Logs incoming HTTP requests
const cors = require('cors'); // Enables CORS

// Database integration
const mongoose = require('mongoose');
// Connects to database
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.wux8g.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)
    .then( () => {
      console.log('Connected to database ');
    })
    .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });

// Schedule API update
const cron = require('node-cron');
const {updateNews} = require('./api/newsAPI');
cron.schedule('*/30 * * * *', async () => {
  console.log('Updating news every 30 minutes');
  await updateNews();
  console.log('Finished updating news');
});

// Middleware
app.use('/static', express.static(PUBLIC_DIR)); // Serves static files
app.use('/client', express.static(BUILD_DIR)); // Serves static files

app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({
  extended: true,
})); // Parses incoming request body
app.use(morgan('dev')); // Sets logging mode
app.use(cors()); // Enables CORS
app.use('/', router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(BUILD_DIR, 'index.html'));
});

module.exports = app;
