'use strict';

/**
 * Imports
 */

// Dependencies
const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Routes
const routes = require('./routes/index');

/**
 * Initialise
 */

// Initialise app
const app = express();

// Set port
const PORT = process.env.PORT || 8080;
app.set('port', PORT);

/**
 * Middlewares
 */

// view engine
app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars');

// HTTP request logger
app.use(logger('dev'));

// Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cookie-parser middleware
app.use(cookieParser());

// Static path
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', routes);

/**
 * Start the server
 */

app.listen(PORT, () => console.log(`Server started...\nListening on port ${PORT}...`));