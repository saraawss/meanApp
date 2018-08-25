// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
// Get our API routes
const api = require('./server/routes/api');
const rate = require('./server/routes/rate');
const bdd = require('./server/routes/bd');

const app = express();

mongoose.connect('mongodb://localhost/myappdatabase');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Enable CORS
app.use(cors())

// Set our api routes
app.use('/api', api);
app.use('/rate', rate);
app.use('/bd', bdd);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));