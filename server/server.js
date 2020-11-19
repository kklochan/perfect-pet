const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// import './styles.css';
const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, 'client')));

// const loadResults = (req, res) => {};

/**
 * start server
 */

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(PORT);
